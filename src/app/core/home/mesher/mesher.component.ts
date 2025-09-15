import {
  Component,
  ElementRef,
  ViewChild,
  OnInit,
  OnDestroy,
  HostListener,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  NgZone,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser, NgFor, NgIf, NgClass } from '@angular/common';
import { Subject, fromEvent, animationFrameScheduler } from 'rxjs';
import { takeUntil, throttleTime, observeOn } from 'rxjs/operators';

export type ThemeType = 'light' | 'dark' | 'auto' | 'minimal' | 'vibrant';
export type IntensityLevel = 'low' | 'medium' | 'high' | 'ultra';
export type PerformanceMode = 'auto' | 'high' | 'balanced' | 'power-save';

interface MousePosition {
  x: number;
  y: number;
}

@Component({
  selector: 'app-mesher',
  templateUrl: './mesher.component.html',
  styleUrls: ['./mesher.component.scss'],
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
})
export class MesherComponent implements OnInit, OnDestroy {
  @ViewChild('meshCanvas', { static: true })
  meshCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('mesherContainer', { static: true })
  mesherContainer!: ElementRef<HTMLDivElement>;

  // Theme Management
  @Input() currentTheme: ThemeType = 'light';
  @Input() theme: 'light' | 'dark' = 'light';
  @Input() intensityLevel: IntensityLevel = 'medium';
  @Input() performanceMode: PerformanceMode = 'auto';
  @Input() interactive: boolean = true;
  @Input() showDebugInfo: boolean = false;

  @Output() themeChange = new EventEmitter<ThemeType>();
  @Output() intensityChange = new EventEmitter<IntensityLevel>();

  // Component State
  isActive: boolean = false;
  isLoading: boolean = true;
  isMouseActive: boolean = false;
  mousePosition: MousePosition | null = null;
  currentFPS: number = 60;

  // Theme computed properties
  resolvedTheme: ThemeType = 'light';
  themeClasses: string[] = [];

  // Animation and rendering
  private animationFrameId?: number;
  private lastFrameTime: number = 0;
  private frameCount: number = 0;
  private fpsUpdateTime: number = 0;

  // Canvas context
  private ctx!: CanvasRenderingContext2D;
  private canvasWidth: number = 0;
  private canvasHeight: number = 0;

  // Cleanup
  private destroy$ = new Subject<void>();

  // Loading
  loadingText: string[] = [
    'I',
    'N',
    'I',
    'T',
    'I',
    'A',
    'L',
    'I',
    'Z',
    'I',
    'N',
    'G',
  ];

  // Environment
  isProduction: boolean = false;
  private isBrowser: boolean;

  constructor(
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.isProduction = !this.isBrowser || !(window as any)?.['ng']?.probe;
  }

  ngOnInit(): void {
    if (!this.isBrowser) return;

    this.initializeTheme();
    this.setupCanvas();
    this.setupEventListeners();
    this.startAnimation();

    // Simulate loading completion
    setTimeout(() => {
      this.completeLoading();
    }, 2000);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();

    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  // Theme Management
  private initializeTheme(): void {
    this.resolvedTheme = this.resolveTheme();
    this.updateThemeClasses();
  }

  private resolveTheme(): ThemeType {
    if (this.currentTheme === 'auto') {
      if (this.isBrowser && window.matchMedia) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light';
      }
      return 'light';
    }
    return this.currentTheme;
  }

  private updateThemeClasses(): void {
    this.themeClasses = [
      this.resolvedTheme,
      `intensity-${this.intensityLevel}`,
      `performance-${this.performanceMode}`,
    ];

    if (this.interactive) {
      this.themeClasses.push('interactive');
    }
  }

  // Public theme methods
  setTheme(theme: ThemeType): void {
    if (this.currentTheme !== theme) {
      this.currentTheme = theme;
      this.resolvedTheme = this.resolveTheme();
      this.updateThemeClasses();
      this.themeChange.emit(theme);
      this.cdr.markForCheck();
    }
  }

  setIntensity(intensity: IntensityLevel): void {
    if (this.intensityLevel !== intensity) {
      this.intensityLevel = intensity;
      this.updateThemeClasses();
      this.intensityChange.emit(intensity);
      this.cdr.markForCheck();
    }
  }

  toggleTheme(): void {
    const newTheme = this.resolvedTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  // Canvas Setup
  private setupCanvas(): void {
    if (!this.meshCanvas?.nativeElement) return;

    const canvas = this.meshCanvas.nativeElement;
    this.ctx = canvas.getContext('2d')!;

    if (!this.ctx) {
      console.error('Could not get canvas context');
      return;
    }

    this.resizeCanvas();
  }

  private resizeCanvas(): void {
    if (!this.meshCanvas?.nativeElement || !this.isBrowser) return;

    const canvas = this.meshCanvas.nativeElement;
    const container = this.mesherContainer.nativeElement;

    // Get actual container dimensions
    const rect = container.getBoundingClientRect();
    this.canvasWidth = rect.width || window.innerWidth;
    this.canvasHeight = rect.height || window.innerHeight;

    // Set canvas size with device pixel ratio for crisp rendering
    const devicePixelRatio = window.devicePixelRatio || 1;
    canvas.width = this.canvasWidth * devicePixelRatio;
    canvas.height = this.canvasHeight * devicePixelRatio;

    // Scale context back to normal
    this.ctx.scale(devicePixelRatio, devicePixelRatio);

    // Set CSS size
    canvas.style.width = `${this.canvasWidth}px`;
    canvas.style.height = `${this.canvasHeight}px`;
  }

  // Event Listeners
  private setupEventListeners(): void {
    if (!this.isBrowser) return;

    // Window resize
    fromEvent(window, 'resize')
      .pipe(
        takeUntil(this.destroy$),
        throttleTime(100, animationFrameScheduler)
      )
      .subscribe(() => {
        this.resizeCanvas();
      });

    // Theme change detection
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handler = () => {
        if (this.currentTheme === 'auto') {
          this.resolvedTheme = this.resolveTheme();
          this.updateThemeClasses();
          this.cdr.markForCheck();
        }
      };

      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handler);
      } else {
        // Fallback for older browsers
        mediaQuery.addListener(handler);
      }
    }
  }

  // Mouse Events
  onMouseEnter(event: MouseEvent): void {
    if (!this.interactive) return;
    this.isMouseActive = true;
    this.updateMousePosition(event);
  }

  onMouseLeave(): void {
    this.isMouseActive = false;
    this.mousePosition = null;
  }

  onMouseMove(event: MouseEvent): void {
    if (!this.interactive || !this.isMouseActive) return;
    this.updateMousePosition(event);
  }

  private updateMousePosition(event: MouseEvent): void {
    if (!this.meshCanvas?.nativeElement) return;

    const rect = this.meshCanvas.nativeElement.getBoundingClientRect();
    this.mousePosition = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  }

  // Animation
  private startAnimation(): void {
    if (!this.isBrowser) return;

    this.ngZone.runOutsideAngular(() => {
      this.animate();
    });
  }

  private animate = (): void => {
    const currentTime = performance.now();

    // Calculate FPS
    this.frameCount++;
    if (currentTime - this.fpsUpdateTime >= 1000) {
      this.ngZone.run(() => {
        this.currentFPS = Math.round(
          (this.frameCount * 1000) / (currentTime - this.fpsUpdateTime)
        );
        this.frameCount = 0;
        this.fpsUpdateTime = currentTime;
      });
    }

    // Render frame
    this.renderFrame(currentTime);

    this.lastFrameTime = currentTime;
    this.animationFrameId = requestAnimationFrame(this.animate);
  };

  private renderFrame(currentTime: number): void {
    if (!this.ctx || !this.isActive) return;

    // Clear canvas
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

    // Draw mesh gradient based on theme
    this.drawMeshGradient(currentTime);

    // Draw mouse interaction effect
    if (this.isMouseActive && this.mousePosition) {
      this.drawMouseEffect(currentTime);
    }
  }

  private drawMeshGradient(currentTime: number): void {
    // Create animated mesh gradient
    const time = currentTime * 0.001; // Convert to seconds
    const centerX = this.canvasWidth * (0.5 + Math.sin(time * 0.5) * 0.1);
    const centerY = this.canvasHeight * (0.5 + Math.cos(time * 0.3) * 0.1);

    const gradient = this.ctx.createRadialGradient(
      centerX,
      centerY,
      0,
      centerX,
      centerY,
      Math.max(this.canvasWidth, this.canvasHeight) * 0.8
    );

    // Theme-based colors
    const isDark = this.resolvedTheme === 'dark';
    const intensity = this.getIntensityMultiplier();

    if (isDark) {
      gradient.addColorStop(0, `rgba(74, 74, 122, ${0.15 * intensity})`);
      gradient.addColorStop(0.3, `rgba(122, 74, 74, ${0.12 * intensity})`);
      gradient.addColorStop(0.6, `rgba(74, 122, 74, ${0.1 * intensity})`);
      gradient.addColorStop(1, `rgba(74, 90, 122, ${0.08 * intensity})`);
    } else {
      gradient.addColorStop(0, `rgba(230, 230, 255, ${0.2 * intensity})`);
      gradient.addColorStop(0.3, `rgba(255, 215, 215, ${0.18 * intensity})`);
      gradient.addColorStop(0.6, `rgba(215, 255, 215, ${0.15 * intensity})`);
      gradient.addColorStop(1, `rgba(215, 243, 255, ${0.12 * intensity})`);
    }

    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
  }

  private drawMouseEffect(currentTime: number): void {
    if (!this.mousePosition) return;

    const { x, y } = this.mousePosition;
    const radius = 150;
    const intensity = this.getIntensityMultiplier();
    const pulse = Math.sin(currentTime * 0.005) * 0.5 + 0.5;

    const gradient = this.ctx.createRadialGradient(x, y, 0, x, y, radius);

    const isDark = this.resolvedTheme === 'dark';
    const baseOpacity = 0.15 * intensity * pulse;

    if (isDark) {
      gradient.addColorStop(0, `rgba(200, 200, 255, ${baseOpacity})`);
      gradient.addColorStop(0.5, `rgba(150, 150, 200, ${baseOpacity * 0.5})`);
    } else {
      gradient.addColorStop(0, `rgba(255, 255, 255, ${baseOpacity})`);
      gradient.addColorStop(0.5, `rgba(230, 230, 255, ${baseOpacity * 0.5})`);
    }
    gradient.addColorStop(1, 'transparent');

    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
  }

  private getIntensityMultiplier(): number {
    switch (this.intensityLevel) {
      case 'low':
        return 0.4;
      case 'medium':
        return 0.7;
      case 'high':
        return 0.9;
      case 'ultra':
        return 1.0;
      default:
        return 0.7;
    }
  }

  // Loading Management
  private completeLoading(): void {
    this.isLoading = false;
    this.isActive = true;
    this.cdr.markForCheck();
  }

  // Host Listeners for keyboard shortcuts (optional)
  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (!this.showDebugInfo) return;

    switch (event.key) {
      case 't':
      case 'T':
        if (event.ctrlKey || event.metaKey) {
          event.preventDefault();
          this.toggleTheme();
        }
        break;
      case 'i':
      case 'I':
        if (event.ctrlKey || event.metaKey) {
          event.preventDefault();
          this.cycleIntensity();
        }
        break;
    }
  }

  private cycleIntensity(): void {
    const intensities: IntensityLevel[] = ['low', 'medium', 'high', 'ultra'];
    const currentIndex = intensities.indexOf(this.intensityLevel);
    const nextIndex = (currentIndex + 1) % intensities.length;
    this.setIntensity(intensities[nextIndex]);
  }

  // Public API methods
  activate(): void {
    this.isActive = true;
    this.cdr.markForCheck();
  }

  deactivate(): void {
    this.isActive = false;
    this.cdr.markForCheck();
  }

  refresh(): void {
    this.resizeCanvas();
    this.cdr.markForCheck();
  }

  // Getter for external access to theme state
  get isLightTheme(): boolean {
    return this.resolvedTheme === 'light';
  }

  get isDarkTheme(): boolean {
    return this.resolvedTheme === 'dark';
  }
}
