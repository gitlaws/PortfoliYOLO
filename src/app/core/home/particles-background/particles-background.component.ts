import {
  Component,
  OnInit,
  OnDestroy,
  HostListener,
  Inject,
  PLATFORM_ID,
  ChangeDetectorRef,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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
  imports: [],
  templateUrl: './particles-background.component.html',
  styleUrls: ['./particles-background.component.scss'],
})
export class ParticlesBackgroundComponent implements OnInit, OnDestroy {
  private container?: Container;
  private themeSubscription?: Subscription;
  public currentTheme: 'light' | 'dark' = 'dark';
  private isBrowser: boolean;

  // Particle effects properties
  stars: Star[] = [];
  trailDots: TrailDot[] = [];
  private trailIdCounter = 0;
  private animationFrame?: number;

  constructor(
    private themeService: ThemeService,
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.subscribeToTheme();
      this.initializeParticles();
      this.generateStars();
      this.startTrailCleanup();
    }
  }

  ngOnDestroy(): void {
    if (this.container) {
      this.container.destroy();
    }
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    if (this.isBrowser && this.container) {
      setTimeout(() => {
        this.updateParticlesConfig();
      }, 250);
    }
  }

  private subscribeToTheme(): void {
    this.themeSubscription = this.themeService.currentTheme.subscribe(
      (theme: Theme) => {
        const newTheme = theme === Theme.Light ? 'light' : 'dark';

        if (this.currentTheme !== newTheme) {
          this.currentTheme = newTheme;
          this.cdr.detectChanges();

          if (this.container) {
            this.updateParticlesConfig();
          }
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
    if (this.container) {
      this.container.destroy();
      this.initializeParticles();
    }
  }

  private getResponsiveConfig(): ResponsiveConfig {
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
      return {
        particleCount: Math.min(30, Math.floor(screenWidth * 0.04)),
        particleSize: { min: 1, max: 3 },
        speed: 0.5,
        linkDistance: 100,
      };
    } else if (screenWidth < 1200) {
      return {
        particleCount: Math.min(50, Math.floor(screenWidth * 0.05)),
        particleSize: { min: 1.5, max: 4 },
        speed: 0.8,
        linkDistance: 120,
      };
    } else {
      return {
        particleCount: Math.min(80, Math.floor(screenWidth * 0.06)),
        particleSize: { min: 2, max: 5 },
        speed: 1.2,
        linkDistance: 150,
      };
    }
  }

  private getThemeColors() {
    return {
      particles: this.currentTheme === 'light' ? '#1a1a1a' : '#ffffff',
      links: this.currentTheme === 'light' ? '#404040' : '#ffffff',
    };
  }

  private getParticlesConfig(): ISourceOptions {
    const responsive = this.getResponsiveConfig();
    const colors = this.getThemeColors();

    return {
      fpsLimit: 60,
      detectRetina: true,
      background: {
        color: { value: 'transparent' },
        opacity: 0,
      },
      particles: {
        number: { value: responsive.particleCount },
        color: { value: colors.particles },
        shape: { type: 'circle' },
        opacity: {
          value: {
            min: this.currentTheme === 'light' ? 0.4 : 0.3,
            max: this.currentTheme === 'light' ? 0.8 : 0.7,
          },
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
          color: colors.links,
          opacity: this.currentTheme === 'light' ? 0.5 : 0.4,
          width: this.currentTheme === 'light' ? 1.2 : 1,
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
          repulse: {
            distance: window.innerWidth < 768 ? 80 : 120,
            duration: 0.4,
          },
          push: { quantity: window.innerWidth < 768 ? 2 : 4 },
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

  onMouseMove(event: MouseEvent): void {
    if (!this.isBrowser) return;

    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    this.trailDots.push({
      id: this.trailIdCounter++,
      x,
      y,
      opacity: 0.8,
      scale: 1,
    });

    if (this.trailDots.length > 10) {
      this.trailDots.shift();
    }
  }

  clearTrail(): void {
    this.trailDots = [];
  }

  trackTrailDot(index: number, dot: TrailDot): number {
    return dot.id;
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
