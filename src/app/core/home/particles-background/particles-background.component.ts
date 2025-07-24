import {
  Component,
  OnInit,
  OnDestroy,
  HostListener,
  Inject,
  PLATFORM_ID,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../../shared/services/theme/theme.service';
import { Theme } from '../../../shared/models/theme.enum';
import { loadAll } from '@tsparticles/all';
import type { Container, ISourceOptions } from '@tsparticles/engine';

interface ResponsiveConfig {
  particleCount: number;
  particleSize: { min: number; max: number };
  speed: number;
  linkDistance: number;
}

interface Star {
  x: number;
  y: number;
  delay: number;
}

interface TrailDot {
  id: number;
  x: number;
  y: number;
  opacity: number;
  scale: number;
}

@Component({
  selector: 'app-particles-background',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './particles-background.component.html',
  styleUrls: ['./particles-background.component.scss'],
})
export class ParticlesBackgroundComponent implements OnInit, OnDestroy {
  private container?: Container;
  private themeSubscription?: Subscription;
  private animationFrame?: number;
  private trailIdCounter = 0;
  private readonly isBrowser: boolean;

  public currentTheme: 'light' | 'dark' = 'dark';
  public stars: Star[] = [];
  public trailDots: TrailDot[] = [];

  // Configuration constants
  private readonly RESPONSIVE_BREAKPOINTS = {
    mobile: {
      max: 768,
      factor: 0.04,
      particles: 30,
      size: [1, 3],
      speed: 0.5,
      distance: 100,
    },
    tablet: {
      max: 1200,
      factor: 0.05,
      particles: 50,
      size: [1.5, 4],
      speed: 0.8,
      distance: 120,
    },
    desktop: {
      factor: 0.06,
      particles: 80,
      size: [2, 5],
      speed: 1.2,
      distance: 150,
    },
  };

  private readonly THEME_CONFIG = {
    light: {
      particles: '#1a1a1a',
      links: '#404040',
      opacity: [0.4, 0.8],
      linkOpacity: 0.5,
      linkWidth: 1.2,
    },
    dark: {
      particles: '#ffffff',
      links: '#ffffff',
      opacity: [0.3, 0.7],
      linkOpacity: 0.4,
      linkWidth: 1,
    },
  };

  constructor(
    private themeService: ThemeService,
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (!this.isBrowser) return;

    this.subscribeToTheme();
    this.initializeParticles();
    this.generateStars();
    this.startTrailCleanup();
  }

  ngOnDestroy(): void {
    this.container?.destroy();
    this.themeSubscription?.unsubscribe();
    if (this.animationFrame) cancelAnimationFrame(this.animationFrame);
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    if (this.isBrowser && this.container) {
      setTimeout(() => this.updateParticlesConfig(), 250);
    }
  }

  onMouseMove(event: MouseEvent): void {
    if (!this.isBrowser) return;

    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    this.trailDots.push({
      id: this.trailIdCounter++,
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      opacity: 0.8,
      scale: 1,
    });

    if (this.trailDots.length > 10) this.trailDots.shift();
  }

  clearTrail(): void {
    this.trailDots = [];
  }

  trackTrailDot(index: number, dot: TrailDot): number {
    return dot.id;
  }

  private subscribeToTheme(): void {
    this.themeSubscription = this.themeService.currentTheme.subscribe(
      (theme) => {
        const newTheme = theme === Theme.Light ? 'light' : 'dark';
        if (this.currentTheme !== newTheme) {
          this.currentTheme = newTheme;
          this.cdr.detectChanges();
          this.container && this.updateParticlesConfig();
        }
      }
    );
  }

  private async initializeParticles(): Promise<void> {
    try {
      const { tsParticles } = await import('@tsparticles/engine');
      await loadAll(tsParticles);
      this.container = await tsParticles.load({
        id: 'particles-canvas',
        options: this.getParticlesConfig(),
      });
    } catch (error) {
      console.error('Failed to initialize particles:', error);
    }
  }

  private updateParticlesConfig(): void {
    this.container?.destroy();
    this.initializeParticles();
  }

  private getResponsiveConfig(): ResponsiveConfig {
    const width = window.innerWidth;
    const config =
      width < this.RESPONSIVE_BREAKPOINTS.mobile.max
        ? this.RESPONSIVE_BREAKPOINTS.mobile
        : width < this.RESPONSIVE_BREAKPOINTS.tablet.max
        ? this.RESPONSIVE_BREAKPOINTS.tablet
        : this.RESPONSIVE_BREAKPOINTS.desktop;

    return {
      particleCount: Math.min(
        config.particles,
        Math.floor(width * config.factor)
      ),
      particleSize: { min: config.size[0], max: config.size[1] },
      speed: config.speed,
      linkDistance: config.distance,
    };
  }

  private getParticlesConfig(): ISourceOptions {
    const responsive = this.getResponsiveConfig();
    const theme = this.THEME_CONFIG[this.currentTheme];
    const isMobile = window.innerWidth < 768;

    return {
      fpsLimit: 60,
      detectRetina: true,
      background: { color: { value: 'transparent' }, opacity: 0 },
      particles: {
        number: { value: responsive.particleCount },
        color: { value: theme.particles },
        shape: { type: 'circle' },
        opacity: {
          value: { min: theme.opacity[0], max: theme.opacity[1] },
          animation: { enable: true, speed: 0.8, sync: false },
        },
        size: {
          value: {
            min: responsive.particleSize.min,
            max: responsive.particleSize.max,
          },
          animation: { enable: true, speed: 1, sync: false },
        },
        links: {
          enable: true,
          distance: responsive.linkDistance,
          color: theme.links,
          opacity: theme.linkOpacity,
          width: theme.linkWidth,
        },
        move: {
          enable: true,
          speed: responsive.speed,
          direction: 'none',
          random: true,
          straight: false,
          outModes: { default: 'out' },
          attract: { enable: false },
        },
      },
      interactivity: {
        detectsOn: 'canvas',
        events: {
          onHover: { enable: true, mode: 'repulse' },
          onClick: { enable: true, mode: 'push' },
          resize: { enable: true },
        },
        modes: {
          repulse: { distance: isMobile ? 80 : 120, duration: 0.4 },
          push: { quantity: isMobile ? 2 : 4 },
        },
      },
    };
  }

  private generateStars(): void {
    this.stars = Array.from({ length: 20 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
    }));
  }

  private startTrailCleanup(): void {
    const animate = () => {
      this.trailDots = this.trailDots
        .map((dot) => ({
          ...dot,
          opacity: dot.opacity * 0.95,
          scale: dot.scale * 0.98,
        }))
        .filter((dot) => dot.opacity > 0.1);
      this.animationFrame = requestAnimationFrame(animate);
    };
    animate();
  }
}
