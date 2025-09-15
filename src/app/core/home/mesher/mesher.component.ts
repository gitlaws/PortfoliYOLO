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
import { Subject, fromEvent, merge } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';

// Enhanced Interfaces for Mesh Gradient
interface ColorPoint {
  id: number;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  color: string;
  colorRGB: { r: number; g: number; b: number };
  targetColor: string;
  targetColorRGB: { r: number; g: number; b: number };
  morphProgress: number;
  size: number;
  life: number;
  energy: number;
}

interface MeshGradient {
  points: ColorPoint[];
  animationPhase: number;
  morphPhase: number;
  lastUpdateTime: number;
}

interface PerformanceMetrics {
  fps: number;
  frameTime: number;
  averageFrameTime: number;
  renderTime: number;
  colorPoints: number;
  memoryUsage?: number;
}

type ThemeMode = 'auto' | 'light' | 'dark' | 'minimal' | 'vibrant';
type PerformanceMode = 'auto' | 'high' | 'medium' | 'low';
type ValidPerformanceMode = 'high' | 'medium' | 'low';
type IntensityLevel = 'low' | 'medium' | 'high' | 'ultra';

@Component({
  standalone: true,
  selector: 'app-mesher',
  templateUrl: './mesher.component.html',
  styleUrls: ['./mesher.component.scss'],
  imports: [CommonModule],
})
export class MesherComponent implements OnInit, OnDestroy, AfterViewInit {
  // ViewChild References
  @ViewChild('meshCanvas', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('mesherContainer', { static: true })
  containerRef!: ElementRef<HTMLDivElement>;

  // Enhanced Input Properties
  @Input() intensity: number = 0.7;
  @Input() colorPointCount: number = 12;
  @Input() animationSpeed: number = 1;
  @Input() morphIntensity: number = 0.8;
  @Input() theme: ThemeMode = 'auto';
  @Input() performance: PerformanceMode = 'auto';
  @Input() interactive: boolean = true;
  @Input() autoStart: boolean = true;
  @Input() showDebugInfo: boolean = false;
  @Input() seamlessLoop: boolean = true;
  @Input() mouseInfluence: number = 1;

  // Output Events
  @Output() meshReady = new EventEmitter<void>();
  @Output() interactionStart = new EventEmitter<{ x: number; y: number }>();
  @Output() interactionEnd = new EventEmitter<void>();
  @Output() performanceChange = new EventEmitter<PerformanceMetrics>();
  @Output() colorChange = new EventEmitter<{ colors: string[] }>();

  // Enhanced Public Properties
  canvasWidth: number = 0;
  canvasHeight: number = 0;
  isActive: boolean = false;
  isLoading: boolean = true;
  currentTheme: ThemeMode = 'auto';
  performanceMode: PerformanceMode = 'auto';
  intensityLevel: IntensityLevel = 'medium';

  // Performance metrics
  currentFPS: number = 60;
  averageFrameTime: number = 16.67;
  lastRenderTime: number = 0;
  isProduction: boolean = true;

  // Mesh Properties
  colorPoints: ColorPoint[] = [];
  mouseInfluenceStrength: number = 0;

  // Mouse interaction - PUBLIC for template access
  isMouseActive: boolean = false;
  mousePosition: { x: number; y: number } | null = null;

  // Loading text for enhanced loading animation
  loadingText: string[] = ['L', 'O', 'A', 'D', 'I', 'N', 'G'];

  // Private Properties
  private destroy$ = new Subject<void>();
  private ctx!: CanvasRenderingContext2D;
  private animationId!: number;
  private lastFrameTime: number = 0;
  private frameCount: number = 0;
  private frameTimes: number[] = [];
  private isBrowser: boolean;

  // Mesh Data
  private meshGradient: MeshGradient = {
    points: [],
    animationPhase: 0,
    morphPhase: 0,
    lastUpdateTime: 0,
  };

  // Performance Monitoring
  private performanceMetrics: PerformanceMetrics = {
    fps: 60,
    frameTime: 16.67,
    averageFrameTime: 16.67,
    renderTime: 0,
    colorPoints: 0,
  };

  // Enhanced Pastel Color Palette
  private readonly pastelColors = [
    '#e6e6ff', // lavender
    '#ffd7d7', // peach
    '#d7ffd7', // mint
    '#d7f3ff', // sky
    '#ffcce5', // rose
    '#fff7d7', // cream
    '#f0d7ff', // lilac
    '#ffd7cc', // coral
    '#d7ffcc', // sage
    '#cce5ff', // powder
    '#ffccdb', // blush
    '#f5f5dc', // pearl
  ];

  // Enhanced Configuration
  private readonly config = {
    mesh: {
      pointCount: { high: 12, medium: 10, low: 6 },
      animationSpeed: { high: 1.2, medium: 1, low: 0.7 },
      morphDuration: 10000, // milliseconds
      driftSpeed: 0.4,
      mouseInfluenceRadius: 250,
    },
    performance: {
      targetFPS: 60,
      minFPS: 30,
      maxFrameTimeHistory: 60,
    },
    canvas: {
      resolution: { high: 1, medium: 0.8, low: 0.6 },
    },
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
    this.performanceMode = this.detectPerformanceMode();
    this.intensityLevel = this.calculateIntensityLevel();
    this.setupConfiguration();

    if (this.autoStart) {
      this.initializeComponent();
    }
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    setTimeout(() => {
      this.initializeCanvas();
      this.setupEventListeners();
      this.initializeMeshGradient();
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
  }

  // Enhanced Public Methods
  public start(): void {
    if (!this.isActive) {
      this.initializeComponent();
    }
  }

  public stop(): void {
    this.isActive = false;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }

  public updateIntensity(intensity: number): void {
    this.intensity = Math.max(0, Math.min(2, intensity));
    this.intensityLevel = this.calculateIntensityLevel();
    this.updateConfiguration();
  }

  public updateAnimationSpeed(speed: number): void {
    this.animationSpeed = Math.max(0.1, Math.min(3, speed));
  }

  public updateMorphIntensity(intensity: number): void {
    this.morphIntensity = Math.max(0, Math.min(1, intensity));
  }

  public triggerColorShift(): void {
    this.colorPoints.forEach((point) => {
      point.targetColor = this.getRandomPastelColor();
      point.targetColorRGB = this.hexToRgb(point.targetColor);
      point.morphProgress = 0;
    });
  }

  public resetMesh(): void {
    this.initializeMeshGradient();
  }

  // Enhanced Event Handlers
  @HostListener('window:resize', ['$event'])
  onWindowResize(): void {
    this.debounceResize();
  }

  @HostListener('window:visibilitychange')
  onVisibilityChange(): void {
    if (document.hidden) {
      this.stop();
    } else if (this.autoStart) {
      this.start();
    }
  }

  onMouseEnter(event: MouseEvent): void {
    if (!this.interactive) return;

    this.isMouseActive = true;
    const rect = this.canvasRef.nativeElement.getBoundingClientRect();
    this.mousePosition = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };

    this.interactionStart.emit({
      x: this.mousePosition.x,
      y: this.mousePosition.y,
    });
  }

  onMouseLeave(): void {
    this.isMouseActive = false;
    this.mouseInfluenceStrength = 0;
    this.mousePosition = null;
    this.interactionEnd.emit();
  }

  onMouseMove(event: MouseEvent): void {
    if (!this.interactive || !this.isMouseActive) return;

    const rect = this.canvasRef.nativeElement.getBoundingClientRect();
    const newX = event.clientX - rect.left;
    const newY = event.clientY - rect.top;

    if (this.mousePosition) {
      // Calculate mouse movement energy
      const dx = newX - this.mousePosition.x;
      const dy = newY - this.mousePosition.y;
      const mouseSpeed = Math.sqrt(dx * dx + dy * dy);
      this.mouseInfluenceStrength = Math.min(1, mouseSpeed / 150);

      this.mousePosition.x = newX;
      this.mousePosition.y = newY;
    }
  }

  // Template Helper Methods
  trackColorPoint(index: number, point: ColorPoint): number {
    return point.id;
  }

  // Private Methods
  private initializeComponent(): void {
    this.isLoading = true;
    this.setupConfiguration();
    this.initializeCanvas();
    this.initializeMeshGradient();
    this.setupEventListeners();
    this.startAnimation();
    this.finishLoading();
  }

  private calculateIntensityLevel(): IntensityLevel {
    if (this.intensity <= 0.3) return 'low';
    if (this.intensity <= 0.7) return 'medium';
    if (this.intensity <= 1.0) return 'high';
    return 'ultra';
  }

  private setupConfiguration(): void {
    const mode = this.getValidPerformanceMode();
    this.colorPointCount = Math.min(
      this.colorPointCount,
      this.config.mesh.pointCount[mode]
    );
  }

  private getValidPerformanceMode(): ValidPerformanceMode {
    if (this.performanceMode === 'auto') {
      return this.detectPerformanceMode() as ValidPerformanceMode;
    }
    return this.performanceMode as ValidPerformanceMode;
  }

  private detectPerformanceMode(): PerformanceMode {
    if (this.performance !== 'auto') return this.performance;

    const canvas = document.createElement('canvas');
    const gl =
      canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

    if (!gl) return 'low';

    const isMobile =
      /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    const hasGoodCPU = navigator.hardwareConcurrency >= 4;
    const hasGoodMemory = (navigator as any).deviceMemory >= 4;

    if (isMobile && !hasGoodMemory) return 'low';
    if (hasGoodCPU && hasGoodMemory) return 'high';
    return 'medium';
  }

  private initializeCanvas(): void {
    if (!this.canvasRef) return;

    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d', {
      alpha: true,
      desynchronized: true,
      willReadFrequently: false,
    })!;

    this.updateCanvasSize();

    const validMode = this.getValidPerformanceMode();
    this.ctx.imageSmoothingEnabled = true;
    this.ctx.imageSmoothingQuality = validMode === 'high' ? 'high' : 'medium';
  }

  private updateCanvasSize(): void {
    const container = this.containerRef.nativeElement;
    const rect = container.getBoundingClientRect();

    this.canvasWidth = rect.width || window.innerWidth;
    this.canvasHeight = rect.height || window.innerHeight;

    const canvas = this.canvasRef.nativeElement;
    const validMode = this.getValidPerformanceMode();
    const resolution = this.config.canvas.resolution[validMode];
    const dpr = Math.min(window.devicePixelRatio || 1, 2) * resolution;

    canvas.width = this.canvasWidth * dpr;
    canvas.height = this.canvasHeight * dpr;
    canvas.style.width = this.canvasWidth + 'px';
    canvas.style.height = this.canvasHeight + 'px';

    this.ctx.scale(dpr, dpr);
  }

  private initializeMeshGradient(): void {
    this.colorPoints = [];
    this.meshGradient.points = [];

    for (let i = 0; i < this.colorPointCount; i++) {
      const point = this.createColorPoint(i);
      this.colorPoints.push(point);
      this.meshGradient.points.push(point);
    }

    this.performanceMetrics.colorPoints = this.colorPoints.length;

    // Emit initial colors
    const colors = this.colorPoints.map((p) => p.color);
    this.colorChange.emit({ colors });
  }

  private createColorPoint(id: number): ColorPoint {
    const x = Math.random() * this.canvasWidth;
    const y = Math.random() * this.canvasHeight;
    const color = this.getRandomPastelColor();
    const colorRGB = this.hexToRgb(color);

    return {
      id,
      x,
      y,
      targetX: x,
      targetY: y,
      vx: (Math.random() - 0.5) * this.config.mesh.driftSpeed,
      vy: (Math.random() - 0.5) * this.config.mesh.driftSpeed,
      color,
      colorRGB,
      targetColor: color,
      targetColorRGB: colorRGB,
      morphProgress: 0,
      size: 180 + Math.random() * 120,
      life: 0,
      energy: Math.random() * 0.4,
    };
  }

  private getRandomPastelColor(): string {
    return this.pastelColors[
      Math.floor(Math.random() * this.pastelColors.length)
    ];
  }

  private hexToRgb(hex: string): { r: number; g: number; b: number } {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : { r: 255, g: 255, b: 255 };
  }

  private interpolateColor(
    color1: { r: number; g: number; b: number },
    color2: { r: number; g: number; b: number },
    factor: number
  ): { r: number; g: number; b: number } {
    return {
      r: Math.round(color1.r + (color2.r - color1.r) * factor),
      g: Math.round(color1.g + (color2.g - color1.g) * factor),
      b: Math.round(color1.b + (color2.b - color1.b) * factor),
    };
  }

  private rgbToString(rgb: { r: number; g: number; b: number }): string {
    return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  }

  private setupEventListeners(): void {
    if (!this.interactive) return;

    merge(fromEvent(window, 'resize'), fromEvent(window, 'orientationchange'))
      .pipe(debounceTime(250), takeUntil(this.destroy$))
      .subscribe(() => {
        this.updateCanvasSize();
        this.initializeMeshGradient();
      });

    if (!this.isProduction) {
      this.performanceChange
        .pipe(takeUntil(this.destroy$))
        .subscribe((metrics) => {
          this.adaptPerformance(metrics);
        });
    }
  }

  private debounceResize(): void {
    setTimeout(() => {
      this.updateCanvasSize();
      this.initializeMeshGradient();
    }, 250);
  }

  private startAnimation(): void {
    this.ngZone.runOutsideAngular(() => {
      const animate = (currentTime: number) => {
        this.updatePerformanceMetrics(currentTime);
        this.updateMeshGradient(currentTime);
        this.render();

        if (this.isActive) {
          this.animationId = requestAnimationFrame(animate);
        }
      };

      this.animationId = requestAnimationFrame(animate);
    });
  }

  private updatePerformanceMetrics(currentTime: number): void {
    if (this.lastFrameTime) {
      const deltaTime = currentTime - this.lastFrameTime;
      this.performanceMetrics.frameTime = deltaTime;

      this.frameTimes.push(deltaTime);
      if (
        this.frameTimes.length > this.config.performance.maxFrameTimeHistory
      ) {
        this.frameTimes.shift();
      }

      this.frameCount++;

      if (this.frameCount >= 60) {
        this.performanceMetrics.fps = Math.round(1000 / (deltaTime || 16.67));
        this.currentFPS = this.performanceMetrics.fps;

        const avgFrameTime =
          this.frameTimes.reduce((a, b) => a + b, 0) / this.frameTimes.length;
        this.performanceMetrics.averageFrameTime = avgFrameTime;
        this.averageFrameTime = avgFrameTime;

        this.frameCount = 0;

        if (!this.isProduction) {
          this.performanceChange.emit(this.performanceMetrics);
        }
      }
    }

    this.lastFrameTime = currentTime;
  }

  private updateMeshGradient(currentTime: number): void {
    const deltaTime = currentTime - this.meshGradient.lastUpdateTime;

    this.meshGradient.animationPhase += deltaTime * 0.001 * this.animationSpeed;
    this.meshGradient.morphPhase += deltaTime * 0.0008 * this.morphIntensity;

    this.colorPoints.forEach((point, index) => {
      this.updateColorPoint(point, index, deltaTime);
      this.handleMouseInteraction(point);
    });

    this.meshGradient.lastUpdateTime = currentTime;

    // Trigger periodic color shifts for seamless morphing
    if (this.seamlessLoop && this.meshGradient.morphPhase > Math.PI * 2) {
      this.triggerColorShift();
      this.meshGradient.morphPhase = 0;
    }

    // Decay mouse influence
    this.mouseInfluenceStrength *= 0.92;
  }

  private updateColorPoint(
    point: ColorPoint,
    index: number,
    deltaTime: number
  ): void {
    // Update life
    point.life += deltaTime;

    // Enhanced organic movement with multiple sine waves
    const phase1 = this.meshGradient.animationPhase + index * 0.7;
    const phase2 = this.meshGradient.animationPhase * 1.3 + index * 0.5;

    const organicX = Math.sin(phase1) * 40 + Math.cos(phase2) * 20;
    const organicY = Math.cos(phase1 * 1.1) * 35 + Math.sin(phase2 * 0.8) * 25;

    // Update position with enhanced drift
    point.x += point.vx * this.animationSpeed + organicX * 0.008;
    point.y += point.vy * this.animationSpeed + organicY * 0.008;

    // Enhanced boundary wrapping with smoother transitions
    const margin = point.size;
    if (point.x < -margin) point.x = this.canvasWidth + margin;
    if (point.x > this.canvasWidth + margin) point.x = -margin;
    if (point.y < -margin) point.y = this.canvasHeight + margin;
    if (point.y > this.canvasHeight + margin) point.y = -margin;

    // Enhanced color morphing with smoother transitions
    if (point.morphProgress < 1) {
      point.morphProgress += deltaTime / this.config.mesh.morphDuration;
      point.morphProgress = Math.min(1, point.morphProgress);

      const interpolated = this.interpolateColor(
        point.colorRGB,
        point.targetColorRGB,
        this.easeInOutQuart(point.morphProgress)
      );

      point.colorRGB = interpolated;
      point.color = this.rgbToString(interpolated);
    } else if (Math.random() < 0.0008) {
      // Randomly trigger new color target with lower frequency
      point.targetColor = this.getRandomPastelColor();
      point.targetColorRGB = this.hexToRgb(point.targetColor);
      point.morphProgress = 0;
    }

    // Enhanced energy decay
    point.energy *= 0.985;
    point.energy = Math.max(0, point.energy);
  }

  private handleMouseInteraction(point: ColorPoint): void {
    if (!this.isMouseActive || !this.interactive || !this.mousePosition) return;

    const dx = this.mousePosition.x - point.x;
    const dy = this.mousePosition.y - point.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (
      distance <
      this.config.mesh.mouseInfluenceRadius * this.mouseInfluence
    ) {
      const force =
        (this.config.mesh.mouseInfluenceRadius - distance) /
        this.config.mesh.mouseInfluenceRadius;
      const mouseForce = 0.012 * force * this.mouseInfluence;

      // Apply enhanced attraction/repulsion to mouse
      const normalizedDx = dx / distance;
      const normalizedDy = dy / distance;

      point.vx += normalizedDx * mouseForce * this.mouseInfluenceStrength;
      point.vy += normalizedDy * mouseForce * this.mouseInfluenceStrength;
      point.energy = Math.min(1, point.energy + force * 0.15);

      // Trigger color change on strong interaction with smoother threshold
      if (force > 0.6 && point.morphProgress >= 1 && Math.random() < 0.3) {
        point.targetColor = this.getRandomPastelColor();
        point.targetColorRGB = this.hexToRgb(point.targetColor);
        point.morphProgress = 0;
      }
    }
  }

  private easeInOutQuart(t: number): number {
    return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
  }

  private render(): void {
    const renderStart = performance.now();

    if (!this.ctx) return;

    // Clear canvas
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

    // Create enhanced mesh gradient
    this.renderEnhancedMeshGradient();

    this.lastRenderTime = performance.now() - renderStart;
    this.performanceMetrics.renderTime = this.lastRenderTime;
  }

  private renderEnhancedMeshGradient(): void {
    // Enhanced rendering with multiple blend modes and improved gradients
    this.colorPoints.forEach((point, index) => {
      const gradient = this.ctx.createRadialGradient(
        point.x,
        point.y,
        0,
        point.x,
        point.y,
        point.size * (1 + point.energy * 0.3)
      );

      const baseAlpha = 0.45 * this.intensity * (1 + point.energy * 0.4);
      const color = point.color
        .replace('rgb', 'rgba')
        .replace(')', `, ${baseAlpha})`);

      // Enhanced gradient stops for smoother blending
      gradient.addColorStop(0, color);
      gradient.addColorStop(
        0.3,
        color.replace(`, ${baseAlpha})`, `, ${baseAlpha * 0.7})`)
      );
      gradient.addColorStop(
        0.7,
        color.replace(`, ${baseAlpha})`, `, ${baseAlpha * 0.3})`)
      );
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      // Use different blend modes for variety
      const blendModes = ['multiply', 'overlay', 'soft-light'];
      this.ctx.globalCompositeOperation = blendModes[
        index % blendModes.length
      ] as GlobalCompositeOperation;

      this.ctx.fillStyle = gradient;
      this.ctx.fillRect(
        point.x - point.size,
        point.y - point.size,
        point.size * 2,
        point.size * 2
      );
    });

    // Reset composite operation
    this.ctx.globalCompositeOperation = 'source-over';
  }

  private updateConfiguration(): void {
    this.setupConfiguration();
  }

  private adaptPerformance(metrics: PerformanceMetrics): void {
    if (metrics.fps < this.config.performance.minFPS) {
      const newCount = Math.max(6, Math.floor(this.colorPointCount * 0.85));
      if (newCount < this.colorPointCount) {
        this.colorPointCount = newCount;
        this.initializeMeshGradient();
      }
    }
  }

  private finishLoading(): void {
    setTimeout(() => {
      this.isLoading = false;
      this.isActive = true;
      this.meshReady.emit();
      this.cdr.markForCheck();
    }, 800);
  }
}
