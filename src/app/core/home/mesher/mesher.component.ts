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

// Interfaces
interface BlobMorph {
  id: number;
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  opacity: number;
  scale: number;
  delay: number;
  duration: number;
  type: 'primary' | 'secondary' | 'accent';
  life: number;
  maxLife: number;
  morphPhase: number;
  targetX: number;
  targetY: number;
  energy: number;
}

interface ConnectionLine {
  startBlob: BlobMorph;
  endBlob: BlobMorph;
  opacity: number;
  distance: number;
}

interface PerformanceMetrics {
  fps: number;
  frameTime: number;
  blobCount: number;
  morphCount: number;
  renderTime: number;
}

type ThemeMode = 'auto' | 'light' | 'dark' | 'minimal' | 'vibrant';
type PerformanceMode = 'auto' | 'high' | 'medium' | 'low';
type ValidPerformanceMode = 'high' | 'medium' | 'low';

@Component({
  standalone: true,
  selector: 'app-mesher',
  templateUrl: './mesher.component.html',
  styleUrls: ['./mesher.component.scss'],
  imports: [CommonModule],
})
export class MesherComponent implements OnInit, OnDestroy, AfterViewInit {
  // ViewChild References
  @ViewChild('mesherCanvas', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('mesherContainer', { static: true })
  containerRef!: ElementRef<HTMLDivElement>;

  // Input Properties
  @Input() intensity: number = 0.7;
  @Input() blobCount: number = 12;
  @Input() connectionDistance: number = 200;
  @Input() morphSpeed: number = 1;
  @Input() theme: ThemeMode = 'auto';
  @Input() performance: PerformanceMode = 'auto';
  @Input() interactive: boolean = true;
  @Input() autoStart: boolean = true;
  @Input() showDebugInfo: boolean = false;

  // Output Events
  @Output() meshReady = new EventEmitter<void>();
  @Output() interactionStart = new EventEmitter<{ x: number; y: number }>();
  @Output() interactionEnd = new EventEmitter<void>();
  @Output() performanceChange = new EventEmitter<PerformanceMetrics>();

  // Public Properties
  canvasWidth: number = 0;
  canvasHeight: number = 0;
  isActive: boolean = false;
  isLoading: boolean = true;
  currentTheme: ThemeMode = 'auto';
  performanceMode: PerformanceMode = 'auto';
  totalBlobCount: number = 0;
  activeMorphCount: number = 0;
  currentFPS: number = 60;
  isProduction: boolean = true;

  // Blob Arrays for Template
  primaryBlobs: BlobMorph[] = [];
  secondaryBlobs: BlobMorph[] = [];
  accentBlobs: BlobMorph[] = [];

  // Private Properties
  private destroy$ = new Subject<void>();
  private ctx!: CanvasRenderingContext2D;
  private animationId!: number;
  private lastFrameTime: number = 0;
  private frameCount: number = 0;
  private isBrowser: boolean;

  // Mesh Data
  private allBlobs: BlobMorph[] = [];
  private connections: ConnectionLine[] = [];
  private mousePosition = { x: 0, y: 0 };
  private isMouseActive = false;
  private mouseInfluenceRadius = 150;

  // Performance Monitoring
  private performanceMetrics: PerformanceMetrics = {
    fps: 60,
    frameTime: 16.67,
    blobCount: 0,
    morphCount: 0,
    renderTime: 0,
  };

  // Configuration
  private readonly config: {
    maxBlobs: Record<ValidPerformanceMode, number>;
    blobSizes: Record<ValidPerformanceMode, { min: number; max: number }>;
    targetFPS: number;
    minFPS: number;
  } = {
    maxBlobs: {
      high: 20,
      medium: 12,
      low: 6,
    },
    blobSizes: {
      high: { min: 80, max: 240 },
      medium: { min: 60, max: 180 },
      low: { min: 40, max: 120 },
    },
    targetFPS: 60,
    minFPS: 30,
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
    if (!this.isBrowser) {
      return;
    }

    this.currentTheme = this.theme;
    this.performanceMode = this.detectPerformanceMode();
    this.setupConfiguration();

    if (this.autoStart) {
      this.initializeComponent();
    }
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) {
      return;
    }

    setTimeout(() => {
      this.initializeCanvas();
      this.setupEventListeners();
      this.initializeBlobMesh();
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

  // Public Methods
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
    this.intensity = Math.max(0, Math.min(1, intensity));
    this.updateConfiguration();
  }

  public updateTheme(theme: ThemeMode): void {
    this.currentTheme = theme;
    this.theme = theme;
  }

  public resetMesh(): void {
    this.initializeBlobMesh();
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.performanceMetrics };
  }

  // Event Handlers
  @HostListener('window:resize', ['$event'])
  onWindowResize(event?: Event): void {
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
    if (this.interactive) {
      this.isMouseActive = true;
      const rect = this.canvasRef.nativeElement.getBoundingClientRect();
      this.interactionStart.emit({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    }
  }

  onMouseLeave(event: MouseEvent): void {
    this.isMouseActive = false;
    this.interactionEnd.emit();
  }

  onMouseMove(event: MouseEvent): void {
    if (this.interactive && this.isMouseActive) {
      const rect = this.canvasRef.nativeElement.getBoundingClientRect();
      this.mousePosition.x = event.clientX - rect.left;
      this.mousePosition.y = event.clientY - rect.top;
    }
  }

  // Template Tracking Functions
  trackBlob(index: number, blob: BlobMorph): number {
    return blob.id;
  }

  getBlobTransform(blob: BlobMorph): string {
    const rotation = blob.life * 0.5;
    return `scale(${blob.scale}) rotate(${rotation}deg)`;
  }

  // Private Methods
  private initializeComponent(): void {
    this.isLoading = true;
    this.setupConfiguration();
    this.initializeCanvas();
    this.initializeBlobMesh();
    this.setupEventListeners();
    this.startAnimation();
    this.finishLoading();
  }

  private setupConfiguration(): void {
    const mode = this.getValidPerformanceMode();
    this.blobCount = Math.min(this.blobCount, this.config.maxBlobs[mode]);
    this.totalBlobCount = this.blobCount;
  }

  private getValidPerformanceMode(): ValidPerformanceMode {
    if (this.performanceMode === 'auto') {
      return this.detectPerformanceMode() as ValidPerformanceMode;
    }
    return this.performanceMode as ValidPerformanceMode;
  }

  private detectPerformanceMode(): PerformanceMode {
    if (this.performance !== 'auto') {
      return this.performance;
    }

    const canvas = document.createElement('canvas');
    const gl =
      canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

    if (!gl) {
      return 'low';
    }

    const isMobile =
      /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    const hasGoodHardware = navigator.hardwareConcurrency >= 4;
    const hasGoodMemory = (navigator as any).deviceMemory >= 4;

    if (isMobile) {
      return 'low';
    } else if (hasGoodHardware && hasGoodMemory) {
      return 'high';
    } else {
      return 'medium';
    }
  }

  private initializeCanvas(): void {
    if (!this.canvasRef) {
      return;
    }

    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d', { alpha: true, desynchronized: true })!;

    this.updateCanvasSize();

    const validMode = this.getValidPerformanceMode();
    this.ctx.imageSmoothingEnabled = validMode === 'high';
  }

  private updateCanvasSize(): void {
    const container = this.containerRef.nativeElement;
    const rect = container.getBoundingClientRect();

    this.canvasWidth = rect.width || window.innerWidth;
    this.canvasHeight = rect.height || window.innerHeight;

    const canvas = this.canvasRef.nativeElement;
    const validMode = this.getValidPerformanceMode();
    const dpr = validMode === 'high' ? window.devicePixelRatio || 1 : 1;

    canvas.width = this.canvasWidth * dpr;
    canvas.height = this.canvasHeight * dpr;
    canvas.style.width = this.canvasWidth + 'px';
    canvas.style.height = this.canvasHeight + 'px';

    this.ctx.scale(dpr, dpr);
  }

  private initializeBlobMesh(): void {
    this.allBlobs = [];
    this.primaryBlobs = [];
    this.secondaryBlobs = [];
    this.accentBlobs = [];

    const primaryCount = Math.ceil(this.blobCount * 0.4);
    const secondaryCount = Math.ceil(this.blobCount * 0.35);
    const accentCount = this.blobCount - primaryCount - secondaryCount;

    // Create primary blobs
    for (let i = 0; i < primaryCount; i++) {
      const blob = this.createBlob(i, 'primary');
      this.allBlobs.push(blob);
      this.primaryBlobs.push(blob);
    }

    // Create secondary blobs
    for (let i = 0; i < secondaryCount; i++) {
      const blob = this.createBlob(primaryCount + i, 'secondary');
      this.allBlobs.push(blob);
      this.secondaryBlobs.push(blob);
    }

    // Create accent blobs
    for (let i = 0; i < accentCount; i++) {
      const blob = this.createBlob(primaryCount + secondaryCount + i, 'accent');
      this.allBlobs.push(blob);
      this.accentBlobs.push(blob);
    }

    this.totalBlobCount = this.allBlobs.length;
    this.activeMorphCount = this.allBlobs.length;
  }

  private createBlob(id: number, type: BlobMorph['type']): BlobMorph {
    const validMode = this.getValidPerformanceMode();
    const sizeConfig = this.config.blobSizes[validMode];

    const size =
      sizeConfig.min + Math.random() * (sizeConfig.max - sizeConfig.min);
    const x = Math.random() * (this.canvasWidth - size);
    const y = Math.random() * (this.canvasHeight - size);

    return {
      id,
      x,
      y,
      size,
      vx: (Math.random() - 0.5) * 0.5 * this.morphSpeed,
      vy: (Math.random() - 0.5) * 0.5 * this.morphSpeed,
      opacity: 0.6 + Math.random() * 0.3,
      scale: 0.8 + Math.random() * 0.4,
      delay: Math.random() * 3,
      duration: 8 + Math.random() * 8,
      type,
      life: 0,
      maxLife: 1000,
      morphPhase: Math.random() * Math.PI * 2,
      targetX: x,
      targetY: y,
      energy: Math.random(),
    };
  }

  private setupEventListeners(): void {
    if (!this.interactive) {
      return;
    }

    merge(fromEvent(window, 'resize'), fromEvent(window, 'orientationchange'))
      .pipe(debounceTime(250), takeUntil(this.destroy$))
      .subscribe(() => {
        this.updateCanvasSize();
        this.initializeBlobMesh();
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
      this.initializeBlobMesh();
    }, 250);
  }

  private startAnimation(): void {
    this.ngZone.runOutsideAngular(() => {
      const animate = (currentTime: number) => {
        this.updatePerformanceMetrics(currentTime);
        this.updateBlobMesh();
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
      this.frameCount++;

      if (this.frameCount >= 60) {
        this.performanceMetrics.fps = Math.round(1000 / (deltaTime || 16.67));
        this.currentFPS = this.performanceMetrics.fps;
        this.frameCount = 0;

        if (!this.isProduction) {
          this.performanceChange.emit(this.performanceMetrics);
        }
      }
    }

    this.lastFrameTime = currentTime;
  }

  private updateBlobMesh(): void {
    const startTime = performance.now();

    this.allBlobs.forEach((blob) => {
      this.updateBlob(blob);
      this.handleMouseInteraction(blob);
    });

    this.updateConnections();
    this.performanceMetrics.renderTime = performance.now() - startTime;
  }

  private updateBlob(blob: BlobMorph): void {
    // Update position
    blob.x += blob.vx * this.morphSpeed;
    blob.y += blob.vy * this.morphSpeed;
    blob.life += 1;
    blob.morphPhase += 0.02 * this.morphSpeed;

    // Boundary wrapping
    this.wrapBlob(blob);

    // Organic movement patterns
    blob.vx += Math.sin(blob.morphPhase) * 0.01;
    blob.vy += Math.cos(blob.morphPhase * 1.1) * 0.01;

    // Damping
    blob.vx *= 0.99;
    blob.vy *= 0.99;

    // Gentle drift towards target
    const driftForce = 0.001;
    blob.vx += (blob.targetX - blob.x) * driftForce;
    blob.vy += (blob.targetY - blob.y) * driftForce;

    // Update scale and opacity based on life cycle
    const lifeCycle = (blob.life % blob.maxLife) / blob.maxLife;
    blob.scale = 0.8 + 0.4 * Math.sin(lifeCycle * Math.PI * 2);
    blob.opacity = 0.4 + 0.4 * Math.sin(lifeCycle * Math.PI * 4);
  }

  private handleMouseInteraction(blob: BlobMorph): void {
    if (!this.isMouseActive || !this.interactive) {
      return;
    }

    const dx = this.mousePosition.x - blob.x;
    const dy = this.mousePosition.y - blob.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < this.mouseInfluenceRadius) {
      const force =
        (this.mouseInfluenceRadius - distance) / this.mouseInfluenceRadius;
      const pushForce = 0.02 * force;

      blob.vx += (dx / distance) * pushForce;
      blob.vy += (dy / distance) * pushForce;
      blob.energy = Math.min(1, blob.energy + 0.05);
    }
  }

  private wrapBlob(blob: BlobMorph): void {
    const margin = blob.size;

    if (blob.x < -margin) {
      blob.x = this.canvasWidth + margin;
      blob.targetX = Math.random() * this.canvasWidth;
    } else if (blob.x > this.canvasWidth + margin) {
      blob.x = -margin;
      blob.targetX = Math.random() * this.canvasWidth;
    }

    if (blob.y < -margin) {
      blob.y = this.canvasHeight + margin;
      blob.targetY = Math.random() * this.canvasHeight;
    } else if (blob.y > this.canvasHeight + margin) {
      blob.y = -margin;
      blob.targetY = Math.random() * this.canvasHeight;
    }
  }

  private updateConnections(): void {
    const validMode = this.getValidPerformanceMode();

    if (validMode === 'low') {
      this.connections = [];
      return;
    }

    this.connections = [];

    for (let i = 0; i < this.allBlobs.length; i++) {
      for (let j = i + 1; j < this.allBlobs.length; j++) {
        const blobA = this.allBlobs[i];
        const blobB = this.allBlobs[j];

        const dx = blobA.x - blobB.x;
        const dy = blobA.y - blobB.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.connectionDistance) {
          const opacity =
            (this.connectionDistance - distance) / this.connectionDistance;

          this.connections.push({
            startBlob: blobA,
            endBlob: blobB,
            opacity: opacity * this.intensity * 0.3,
            distance,
          });
        }
      }
    }
  }

  private render(): void {
    if (!this.ctx) {
      return;
    }

    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

    // Draw connections
    this.drawConnections();
  }

  private drawConnections(): void {
    this.ctx.strokeStyle = this.getConnectionColor();
    this.ctx.lineWidth = 1;

    this.connections.forEach((connection) => {
      this.ctx.globalAlpha = connection.opacity;

      this.ctx.beginPath();
      this.ctx.moveTo(connection.startBlob.x, connection.startBlob.y);
      this.ctx.lineTo(connection.endBlob.x, connection.endBlob.y);
      this.ctx.stroke();
    });

    this.ctx.globalAlpha = 1;
  }

  private getConnectionColor(): string {
    return this.currentTheme === 'dark'
      ? 'rgba(139, 92, 246, 0.6)'
      : 'rgba(99, 102, 241, 0.4)';
  }

  private updateConfiguration(): void {
    this.setupConfiguration();
  }

  private adaptPerformance(metrics: PerformanceMetrics): void {
    if (metrics.fps < this.config.minFPS) {
      const newCount = Math.max(3, Math.floor(this.totalBlobCount * 0.8));
      if (newCount < this.totalBlobCount) {
        this.blobCount = newCount;
        this.initializeBlobMesh();
      }
    }
  }

  private finishLoading(): void {
    setTimeout(() => {
      this.isLoading = false;
      this.isActive = true;
      this.meshReady.emit();
      this.cdr.markForCheck();
    }, 500);
  }
}
