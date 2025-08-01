import {
  Component,
  ElementRef,
  OnInit,
  OnDestroy,
  ViewChild,
  ChangeDetectionStrategy,
  TrackByFunction,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  datetime?: string;
  icon: string;
  type: 'certification' | 'course' | 'bootcamp';
  description?: string;
  skills?: string[];
  credentialUrl?: string;
  iconLoaded?: boolean;
  iconError?: boolean;
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificationsComponent implements OnInit, OnDestroy {
  @ViewChild('certGrid', { static: true })
  certGrid!: ElementRef<HTMLDivElement>;

  // Public properties for template access
  public theme: 'light' | 'dark' = 'light';
  public isAutoScrolling = true;
  public isDragging = false;
  public displayCertifications: Certification[] = [];

  // Private properties
  private certifications: Certification[] = [
    {
      id: '1',
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'Dec 2023',
      datetime: '2023-12',
      icon: '/assets/icons/aws.svg',
      type: 'certification',
      description:
        'Professional-level certification for designing distributed systems on AWS.',
      skills: ['AWS', 'Cloud Architecture', 'Solution Design'],
      credentialUrl: 'https://aws.amazon.com/verification',
    },
    {
      id: '2',
      name: 'Angular Developer Certification',
      issuer: 'Google',
      date: 'Nov 2023',
      datetime: '2023-11',
      icon: '/assets/icons/angular.svg',
      type: 'certification',
      description: 'Official Angular certification from Google.',
      skills: ['Angular', 'TypeScript', 'RxJS'],
      credentialUrl: 'https://developers.google.com/certification',
    },
    {
      id: '3',
      name: 'Full Stack Web Development',
      issuer: 'freeCodeCamp',
      date: 'Oct 2023',
      datetime: '2023-10',
      icon: '/assets/icons/freecodecamp.svg',
      type: 'course',
      description: 'Comprehensive full-stack development course.',
      skills: ['JavaScript', 'Node.js', 'React', 'MongoDB'],
    },
    {
      id: '4',
      name: 'Docker Fundamentals',
      issuer: 'Docker Inc.',
      date: 'Sep 2023',
      datetime: '2023-09',
      icon: '/assets/icons/docker.svg',
      type: 'course',
      description: 'Container fundamentals and Docker best practices.',
      skills: ['Docker', 'Containers', 'DevOps'],
    },
    {
      id: '5',
      name: 'Coding Bootcamp Graduate',
      issuer: 'Tech Academy',
      date: 'Aug 2023',
      datetime: '2023-08',
      icon: '/assets/icons/bootcamp.svg',
      type: 'bootcamp',
      description: 'Intensive 12-week coding bootcamp program.',
      skills: ['JavaScript', 'Python', 'SQL', 'Git'],
    },
  ];

  private autoScrollInterval?: number;
  private dragStartX = 0;
  private scrollStartX = 0;
  private animationFrameId?: number;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.initializeDisplayCertifications();
    this.startAutoScroll();
    this.detectTheme();
  }

  ngOnDestroy(): void {
    this.stopAutoScroll();
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    this.removeEventListeners();
  }

  // Public methods for template access
  public pauseAutoScroll(): void {
    this.isAutoScrolling = false;
    this.stopAutoScroll();
  }

  public resumeAutoScroll(): void {
    if (!this.isDragging) {
      this.isAutoScrolling = true;
      this.startAutoScroll();
    }
  }

  // Enhanced drag handling for main container
  public onDragStart(event: MouseEvent): void {
    this.isDragging = true;
    this.isAutoScrolling = false;
    this.dragStartX = event.clientX;
    this.scrollStartX = this.certGrid.nativeElement.scrollLeft;

    document.addEventListener('mousemove', this.onDragMove);
    document.addEventListener('mouseup', this.onDragEnd);
    event.preventDefault();
  }

  // Enhanced drag handling for individual card elements
  public onCardDragStart(event: MouseEvent): void {
    event.stopPropagation();
    this.onDragStart(event);
  }

  public onContentDragStart(event: MouseEvent): void {
    event.stopPropagation();
    this.onDragStart(event);
  }

  public onTitleDragStart(event: MouseEvent): void {
    event.stopPropagation();
    this.onDragStart(event);
  }

  public onOrgDragStart(event: MouseEvent): void {
    event.stopPropagation();
    this.onDragStart(event);
  }

  public onDateDragStart(event: MouseEvent): void {
    event.stopPropagation();
    this.onDragStart(event);
  }

  public onBadgeDragStart(event: MouseEvent): void {
    event.stopPropagation();
    this.onDragStart(event);
  }

  // Touch support for drag functionality
  public onTouchStart(event: TouchEvent): void {
    const touch = event.touches[0];
    const mouseEvent = new MouseEvent('mousedown', {
      clientX: touch.clientX,
      clientY: touch.clientY,
      bubbles: true,
      cancelable: true,
    });
    this.onDragStart(mouseEvent);
    event.preventDefault();
  }

  public onCardTouchStart(event: TouchEvent): void {
    event.stopPropagation();
    this.onTouchStart(event);
  }

  public onContentTouchStart(event: TouchEvent): void {
    event.stopPropagation();
    this.onTouchStart(event);
  }

  // Simplified image loading management - Updated for immediate visibility
  public onImageLoad(cert: Certification): void {
    cert.iconLoaded = true;
    cert.iconError = false;
    // No need to call markForCheck since icons are always visible
  }

  public onImageError(event: Event, cert: Certification): void {
    const img = event.target as HTMLImageElement;
    cert.iconError = true;
    cert.iconLoaded = false;

    // Try alternative image sources
    const altSources = [
      `/assets/icons/${cert.type}-default.svg`,
      `/assets/icons/certificate-default.svg`,
      `/assets/icons/default-cert.svg`,
      `/assets/icons/default.svg`,
    ];

    const currentSrc = img.src;
    const nextSource = altSources.find(
      (src) => !currentSrc.includes(src.split('/').pop() || '')
    );

    if (nextSource) {
      setTimeout(() => {
        img.src = nextSource;
      }, 100);
    } else {
      // All fallbacks failed, show the fallback icon
      this.cdr.markForCheck(); // Only update when switching to fallback
    }
  }

  // Prevent text selection during drag
  public onSelectStart(event: Event): boolean {
    if (this.isDragging) {
      event.preventDefault();
      return false;
    }
    return true;
  }

  public trackByCert: TrackByFunction<Certification> = (
    index: number,
    cert: Certification
  ) => {
    return cert.id;
  };

  // Private methods - Updated for immediate icon visibility
  private initializeDisplayCertifications(): void {
    // Duplicate certifications for infinite scroll effect
    this.displayCertifications = [
      ...this.certifications.map((cert) => ({
        ...cert,
        iconLoaded: true, // Always true for immediate visibility
        iconError: false,
      })),
      ...this.certifications.map((cert) => ({
        ...cert,
        id: cert.id + '_dup1',
        iconLoaded: true, // Always true for immediate visibility
        iconError: false,
      })),
      ...this.certifications.map((cert) => ({
        ...cert,
        id: cert.id + '_dup2',
        iconLoaded: true, // Always true for immediate visibility
        iconError: false,
      })),
    ];
  }

  private startAutoScroll(): void {
    this.stopAutoScroll();

    const scroll = () => {
      if (this.isAutoScrolling && !this.isDragging) {
        const container = this.certGrid.nativeElement;
        const scrollAmount = 0.5; // Pixels per frame

        container.scrollLeft += scrollAmount;

        // Reset scroll position when reaching halfway point
        const maxScroll = container.scrollWidth / 3;
        if (container.scrollLeft >= maxScroll) {
          container.scrollLeft = 0;
        }
      }

      if (this.isAutoScrolling) {
        this.animationFrameId = requestAnimationFrame(scroll);
      }
    };

    this.animationFrameId = requestAnimationFrame(scroll);
  }

  private stopAutoScroll(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = undefined;
    }
  }

  private onDragMove = (event: MouseEvent): void => {
    if (!this.isDragging) return;

    const deltaX = event.clientX - this.dragStartX;
    const newScrollLeft = this.scrollStartX - deltaX;

    this.certGrid.nativeElement.scrollLeft = Math.max(0, newScrollLeft);
  };

  private onDragEnd = (): void => {
    this.isDragging = false;

    this.removeEventListeners();

    // Resume auto-scroll after a short delay
    setTimeout(() => {
      this.resumeAutoScroll();
    }, 1000);
  };

  private removeEventListeners(): void {
    document.removeEventListener('mousemove', this.onDragMove);
    document.removeEventListener('mouseup', this.onDragEnd);
  }

  private detectTheme(): void {
    // Detect system theme preference
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      this.theme = 'dark';
    }

    // Listen for theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const themeHandler = (e: MediaQueryListEvent) => {
      this.theme = e.matches ? 'dark' : 'light';
      this.cdr.markForCheck();
    };

    mediaQuery.addEventListener('change', themeHandler);

    // Clean up on destroy
    this.ngOnDestroy = () => {
      this.stopAutoScroll();
      if (this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId);
      }
      this.removeEventListeners();
      mediaQuery.removeEventListener('change', themeHandler);
    };
  }
}
