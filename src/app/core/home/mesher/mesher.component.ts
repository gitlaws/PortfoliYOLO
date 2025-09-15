import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  HostListener,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  NgZone,
  Inject,
  PLATFORM_ID,
  AfterViewInit,
} from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { Subject, fromEvent } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';

interface ColorPoint {
  id: number;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  color: string;
  targetColor: string;
  morphProgress: number;
  size: number;
  life: number;
  energy: number;
  alpha: number;
}

interface MeshConfig {
  pointCount: number;
  animationSpeed: number;
  morphDuration: number;
  driftSpeed: number;
  mouseInfluenceRadius: number;
}

type ThemeMode = 'auto' | 'light' | 'dark' | 'minimal' | 'vibrant';
type PerformanceMode = 'auto' | 'high' | 'medium' | 'low';
type IntensityLevel = 'low' | 'medium' | 'high' | 'ultra';

@Component({
  standalone: true,
  selector: 'app-mesher',
  templateUrl: './mesher.component.html',
  styleUrls: ['./mesher.component.scss'],
  imports: [CommonModule],
})
export class MesherComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('meshCanvas', { static: false })
  canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('mesherContainer', { static: true })
  containerRef!: ElementRef<HTMLDivElement>;

  // Inputs
  @Input() intensity: number = 0.8;
  @Input() colorPointCount: number = 12;
  @Input() animationSpeed: number = 1.2;
  @Input() morphIntensity: number = 0.8;
  @Input() theme: ThemeMode = 'auto';
  @Input() performance: PerformanceMode = 'auto';
  @Input() interactive: boolean = true;
  @Input() autoStart: boolean = true;
  @Input() showDebugInfo: boolean = false;
  @Input() seamlessLoop: boolean = true;

  // Outputs
  @Output() meshReady = new EventEmitter<void>();
  @Output() interactionStart = new EventEmitter<{ x: number; y: number }>();
  @Output() interactionEnd = new EventEmitter<void>();

  // Public properties for template
  canvasWidth: number = 0;
  canvasHeight: number = 0;
  isActive: boolean = false;
  isLoading: boolean = true;
  currentTheme: ThemeMode = 'auto';
  resolvedTheme: 'light' | 'dark' = 'light';
  performanceMode: string = 'medium';
  intensityLevel: string = 'medium';
  colorPoints: ColorPoint[] = [];
  isMouseActive: boolean = false;
  mousePosition: { x: number; y: number } | null = null;
  currentFPS: number = 60;
  averageFrameTime: number = 16.67;
  lastRenderTime: number = 0;
  mouseInfluenceStrength: number = 0;
  isProduction: boolean = true;
  loadingText: string[] = ['L', 'O', 'A', 'D', 'I', 'N', 'G'];

  // Private properties
  private destroy$ = new Subject<void>();
  private ctx!: CanvasRenderingContext2D;
  private animationId!: number;
  private lastFrameTime: number = 0;
  private frameCount: number = 0;
  private isBrowser: boolean;
  private resizeTimeout: any;
  private animationPhase: number = 0;
  private morphPhase: number = 0;

  // Theme-aware color palettes
  private readonly lightColors = [
    '#E6E6FF',
    '#FFD7D7',
    '#D7FFD7',
    '#D7F3FF',
    '#FFCCE5',
    '#FFF7D7',
    '#F0D7FF',
    '#FFD7CC',
    '#D7FFCC',
    '#CCE5FF',
    '#FFCCDB',
    '#F5F5DC',
  ];

  private readonly darkColors = [
    '#4A4A7A',
    '#7A4A4A',
    '#4A7A4A',
    '#4A5A7A',
    '#7A4A5A',
    '#7A5A4A',
    '#5A4A7A',
    '#7A5A4A',
    '#5A7A4A',
    '#4A5A7A',
    '#7A4A55',
    '#5A5A4A',
  ];

  private config: MeshConfig = {
    pointCount: 12,
    animationSpeed: 1,
    morphDuration: 8000,
    driftSpeed: 0.3,
    mouseInfluenceRadius: 200,
  };

  constructor(
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.isProduction = !this.showDebugInfo;
  }

  ngOnInit(): void {
    if (!this.isBrowser) return;
    this.currentTheme = this.theme;
    this.resolveTheme();
    this.setupConfiguration();
    this.setupThemeListener();
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;
    setTimeout(() => {
      this.initializeCanvas();
      this.setupEventListeners();
      this.initializeColorPoints();
      this.startAnimation();
      this.finishLoading();
    }, 100);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
  }

  // Public methods
  public start(): void {
    if (!this.isActive) {
      this.isActive = true;
      this.startAnimation();
    }
  }

  public stop(): void {
    this.isActive = false;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }

  public updateTheme(theme: ThemeMode): void {
    this.theme = theme;
    this.currentTheme = theme;
    this.resolveTheme();
    this.triggerColorShift();
  }

  public triggerColorShift(): void {
    this.colorPoints.forEach((point) => {
      point.targetColor = this.getRandomColor();
      point.morphProgress = 0;
    });
  }

  // Event handlers
  @HostListener('window:resize')
  onWindowResize(): void {
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
    this.resizeTimeout = setTimeout(() => {
      this.updateCanvasSize();
      this.repositionPoints();
    }, 250);
  }

  onMouseEnter(event: MouseEvent): void {
    if (!this.interactive) return;
    this.isMouseActive = true;
    this.updateMousePosition(event);
    this.interactionStart.emit({
      x: this.mousePosition?.x || 0,
      y: this.mousePosition?.y || 0,
    });
  }

  onMouseLeave(): void {
    this.isMouseActive = false;
    this.mousePosition = null;
    this.mouseInfluenceStrength = 0;
    this.interactionEnd.emit();
  }

  onMouseMove(event: MouseEvent): void {
    if (!this.interactive || !this.isMouseActive) return;
    this.updateMousePosition(event);
  }

  // Template helpers
  trackColorPoint(index: number, point: ColorPoint): number {
    return point.id;
  }

  get themeClasses(): { [key: string]: boolean } {
    return {
      [this.currentTheme]: true,
      [this.resolvedTheme]: true,
      mobile: this.isBrowser ? window.innerWidth <= 768 : false,
      iphone14pro: this.isBrowser ? window.innerWidth <= 393 : false,
      active: this.isActive,
      interactive: this.interactive,
    };
  }

  // Private methods
  private resolveTheme(): void {
    if (this.currentTheme === 'auto') {
      this.resolvedTheme =
        this.isBrowser &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light';
    } else {
      this.resolvedTheme = this.currentTheme === 'dark' ? 'dark' : 'light';
    }
  }

  private setupThemeListener(): void {
    if (this.currentTheme === 'auto' && this.isBrowser) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', (e) => {
        this.resolvedTheme = e.matches ? 'dark' : 'light';
        this.triggerColorShift();
        this.cdr.detectChanges();
      });
    }
  }

  private setupConfiguration(): void {
    this.config.pointCount = Math.min(this.colorPointCount, 15);
    this.config.animationSpeed = this.animationSpeed;
    this.intensityLevel = this.calculateIntensityLevel();
  }

  private calculateIntensityLevel(): IntensityLevel {
    if (this.intensity <= 0.3) return 'low';
    if (this.intensity <= 0.7) return 'medium';
    if (this.intensity <= 1.0) return 'high';
    return 'ultra';
  }

  private initializeCanvas(): void {
    if (!this.canvasRef?.nativeElement) return;
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d', { alpha: true, desynchronized: true })!;
    if (!this.ctx) {
      console.error('Failed to get 2D context');
      return;
    }
    this.updateCanvasSize();
    this.ctx.imageSmoothingEnabled = true;
  }

  private updateCanvasSize(): void {
    if (!this.canvasRef?.nativeElement || !this.containerRef?.nativeElement)
      return;
    const container = this.containerRef.nativeElement;
    const canvas = this.canvasRef.nativeElement;
    this.canvasWidth =
      container.clientWidth || (this.isBrowser ? window.innerWidth : 1920);
    this.canvasHeight =
      container.clientHeight || (this.isBrowser ? window.innerHeight : 1080);
    const dpr = this.isBrowser ? Math.min(window.devicePixelRatio || 1, 2) : 1;
    canvas.width = this.canvasWidth * dpr;
    canvas.height = this.canvasHeight * dpr;
    canvas.style.width = this.canvasWidth + 'px';
    canvas.style.height = this.canvasHeight + 'px';
    if (this.ctx) {
      this.ctx.scale(dpr, dpr);
    }
  }

  private initializeColorPoints(): void {
    this.colorPoints = [];
    for (let i = 0; i < this.config.pointCount; i++) {
      const point = this.createColorPoint(i);
      this.colorPoints.push(point);
    }
  }

  private createColorPoint(id: number): ColorPoint {
    const padding = 100;
    const x =
      padding + Math.random() * Math.max(0, this.canvasWidth - padding * 2);
    const y =
      padding + Math.random() * Math.max(0, this.canvasHeight - padding * 2);
    const color = this.getRandomColor();

    return {
      id,
      x,
      y,
      targetX: x,
      targetY: y,
      vx: (Math.random() - 0.5) * this.config.driftSpeed,
      vy: (Math.random() - 0.5) * this.config.driftSpeed,
      color,
      targetColor: color,
      morphProgress: 1,
      size: 150 + Math.random() * 100,
      life: 0,
      energy: 0,
      alpha:
        this.resolvedTheme === 'dark'
          ? 0.6 + Math.random() * 0.4
          : 0.4 + Math.random() * 0.3,
    };
  }

  private getRandomColor(): string {
    const colors =
      this.resolvedTheme === 'dark' ? this.darkColors : this.lightColors;
    return colors[Math.floor(Math.random() * colors.length)];
  }

  private setupEventListeners(): void {
    fromEvent(window, 'resize')
      .pipe(debounceTime(250), takeUntil(this.destroy$))
      .subscribe(() => this.onWindowResize());
  }

  private startAnimation(): void {
    this.isActive = true;
    this.ngZone.runOutsideAngular(() => {
      const animate = (currentTime: number) => {
        if (!this.isActive) return;
        this.updateAnimation(currentTime);
        this.render();
        this.updatePerformanceMetrics(currentTime);
        this.animationId = requestAnimationFrame(animate);
      };
      this.animationId = requestAnimationFrame(animate);
    });
  }

  private updateAnimation(currentTime: number): void {
    const deltaTime = this.lastFrameTime
      ? currentTime - this.lastFrameTime
      : 16.67;
    this.lastFrameTime = currentTime;
    this.animationPhase += deltaTime * 0.001 * this.config.animationSpeed;
    this.morphPhase += deltaTime * 0.0005;
    this.colorPoints.forEach((point, index) => {
      this.updateColorPoint(point, index, deltaTime);
      this.handleMouseInteraction(point);
    });
    if (this.seamlessLoop && Math.sin(this.morphPhase) > 0.99) {
      this.triggerColorShift();
    }
    this.mouseInfluenceStrength *= 0.95;
  }

  private updateColorPoint(
    point: ColorPoint,
    index: number,
    deltaTime: number
  ): void {
    point.life += deltaTime;
    const phase1 = this.animationPhase + index * 0.8;
    const phase2 = this.animationPhase * 1.5 + index * 0.6;
    const organicX = Math.sin(phase1) * 30 + Math.cos(phase2) * 15;
    const organicY = Math.cos(phase1 * 1.2) * 25 + Math.sin(phase2 * 0.9) * 20;
    point.x += point.vx + organicX * 0.01;
    point.y += point.vy + organicY * 0.01;
    const margin = point.size * 0.5;
    if (point.x < -margin) point.x = this.canvasWidth + margin;
    if (point.x > this.canvasWidth + margin) point.x = -margin;
    if (point.y < -margin) point.y = this.canvasHeight + margin;
    if (point.y > this.canvasHeight + margin) point.y = -margin;
    if (point.morphProgress < 1) {
      point.morphProgress += deltaTime / this.config.morphDuration;
      point.morphProgress = Math.min(1, point.morphProgress);
      if (point.morphProgress >= 1) {
        point.color = point.targetColor;
      }
    } else if (Math.random() < 0.001) {
      point.targetColor = this.getRandomColor();
      point.morphProgress = 0;
    }
    point.energy *= 0.98;
  }

  private handleMouseInteraction(point: ColorPoint): void {
    if (!this.isMouseActive || !this.mousePosition) return;
    const dx = this.mousePosition.x - point.x;
    const dy = this.mousePosition.y - point.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < this.config.mouseInfluenceRadius) {
      const force =
        (this.config.mouseInfluenceRadius - distance) /
        this.config.mouseInfluenceRadius;
      const mouseForce = 0.02 * force;
      point.vx += (dx / distance) * mouseForce;
      point.vy += (dy / distance) * mouseForce;
      point.energy = Math.min(1, point.energy + force * 0.1);
      this.mouseInfluenceStrength = Math.max(
        this.mouseInfluenceStrength,
        force
      );
      if (force > 0.7 && point.morphProgress >= 1 && Math.random() < 0.2) {
        point.targetColor = this.getRandomColor();
        point.morphProgress = 0;
      }
    }
  }

  private render(): void {
    if (!this.ctx) return;
    const renderStart = performance.now();
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.renderMeshGradient();
    this.lastRenderTime = performance.now() - renderStart;
  }

  private renderMeshGradient(): void {
    if (!this.ctx || this.colorPoints.length === 0) return;
    this.colorPoints.forEach((point) => {
      const gradient = this.ctx.createRadialGradient(
        point.x,
        point.y,
        0,
        point.x,
        point.y,
        point.size * (1 + point.energy * 0.5)
      );
      const themeMultiplier = this.resolvedTheme === 'dark' ? 1.4 : 1.0;
      const baseAlpha =
        point.alpha *
        this.intensity *
        0.6 *
        themeMultiplier *
        (1 + point.energy * 0.3);
      const color = this.hexToRgba(point.color, baseAlpha);
      const fadeColor = this.hexToRgba(point.color, 0);
      gradient.addColorStop(0, color);
      gradient.addColorStop(0.4, this.hexToRgba(point.color, baseAlpha * 0.6));
      gradient.addColorStop(0.8, this.hexToRgba(point.color, baseAlpha * 0.2));
      gradient.addColorStop(1, fadeColor);
      this.ctx.globalCompositeOperation =
        this.resolvedTheme === 'dark' ? 'screen' : 'multiply';
      this.ctx.fillStyle = gradient;
      const size = point.size * (1 + point.energy * 0.2);
      this.ctx.fillRect(point.x - size, point.y - size, size * 2, size * 2);
    });
    this.ctx.globalCompositeOperation = 'source-over';
  }

  private hexToRgba(hex: string, alpha: number): string {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  private updateMousePosition(event: MouseEvent): void {
    if (!this.canvasRef?.nativeElement) return;
    const rect = this.canvasRef.nativeElement.getBoundingClientRect();
    const newX = event.clientX - rect.left;
    const newY = event.clientY - rect.top;
    if (this.mousePosition) {
      const dx = newX - this.mousePosition.x;
      const dy = newY - this.mousePosition.y;
      const speed = Math.sqrt(dx * dx + dy * dy);
      this.mouseInfluenceStrength = Math.min(1, speed / 100);
    }
    this.mousePosition = { x: newX, y: newY };
  }

  private repositionPoints(): void {
    this.colorPoints.forEach((point) => {
      point.x = Math.min(point.x, this.canvasWidth);
      point.y = Math.min(point.y, this.canvasHeight);
    });
  }

  private updatePerformanceMetrics(currentTime: number): void {
    this.frameCount++;
    if (this.frameCount >= 30) {
      const deltaTime = currentTime - this.lastFrameTime;
      this.currentFPS = Math.round(1000 / (deltaTime || 16.67));
      this.averageFrameTime = deltaTime;
      this.frameCount = 0;
    }
  }

  private finishLoading(): void {
    setTimeout(() => {
      this.isLoading = false;
      this.isActive = true;
      this.meshReady.emit();
      this.cdr.detectChanges();
    }, 500);
  }
}
