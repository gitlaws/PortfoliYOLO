import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

interface Certification {
  title: string;
  organization: string;
  date: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class CertificationsComponent implements OnInit, OnDestroy {
  @ViewChild('carouselContainer', { static: true })
  carouselContainer!: ElementRef;

  certifications: Certification[] = [
    {
      title: 'Angular Developer Certification',
      organization: 'Google',
      date: 'May 2024',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      link: '#',
    },
    {
      title: 'Modern JavaScript Course',
      organization: 'Mozilla Developer Network',
      date: 'Jan 2024',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      link: '#',
    },
    {
      title: 'React Developer Certification',
      organization: 'Meta',
      date: 'Mar 2024',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      link: '#',
    },
    {
      title: 'AWS Cloud Practitioner',
      organization: 'Amazon Web Services',
      date: 'Feb 2024',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
      link: '#',
    },
    {
      title: 'Node.js Backend Development',
      organization: 'Node.js Foundation',
      date: 'Dec 2023',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      link: '#',
    },
    {
      title: 'Docker Containerization',
      organization: 'Docker Inc.',
      date: 'Nov 2023',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      link: '#',
    },
  ];

  private autoScrollInterval: any;
  private scrollSpeed = 2.5; // Increased from 1 to 2.5
  private isScrollingPaused = false;
  private isDragging = false;
  private startX = 0;
  private scrollLeft = 0;
  private animationId: number | null = null;
  private velocity = 0;
  private lastTouchX = 0;
  private lastTimestamp = 0;

  ngOnInit(): void {
    this.startAutoScroll();
    this.addEventListeners();
    this.setupSmoothScrolling();
  }

  ngOnDestroy(): void {
    this.stopAutoScroll();
    this.removeEventListeners();
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }

  // Setup smooth scrolling with requestAnimationFrame
  private setupSmoothScrolling(): void {
    const container = this.carouselContainer.nativeElement;
    container.style.scrollBehavior = 'auto'; // Disable CSS scroll behavior for manual control
  }

  public startAutoScroll(): void {
    this.stopAutoScroll();

    const smoothScroll = (timestamp: number) => {
      if (
        !this.isScrollingPaused &&
        !this.isDragging &&
        this.carouselContainer
      ) {
        const container = this.carouselContainer.nativeElement;

        // Smooth exponential easing
        const easedSpeed =
          this.scrollSpeed * (1 + Math.sin(timestamp * 0.001) * 0.1);
        container.scrollLeft += easedSpeed;

        // Reset scroll position for infinite effect with smooth transition
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }

      this.autoScrollInterval = requestAnimationFrame(smoothScroll);
    };

    this.autoScrollInterval = requestAnimationFrame(smoothScroll);
  }

  private stopAutoScroll(): void {
    if (this.autoScrollInterval) {
      cancelAnimationFrame(this.autoScrollInterval);
      this.autoScrollInterval = null;
    }
  }

  public pauseAutoScroll(): void {
    this.isScrollingPaused = true;
  }

  public resumeAutoScroll(): void {
    this.isScrollingPaused = false;
  }

  // Enhanced drag functionality with momentum and smooth transitions
  public onMouseDown(event: MouseEvent): void {
    this.isDragging = true;
    this.startX = event.pageX - this.carouselContainer.nativeElement.offsetLeft;
    this.scrollLeft = this.carouselContainer.nativeElement.scrollLeft;
    this.velocity = 0;
    this.lastTouchX = event.pageX;
    this.lastTimestamp = performance.now();
    this.pauseAutoScroll();

    // Add grabbing cursor with smooth transition
    const container = this.carouselContainer.nativeElement;
    container.style.cursor = 'grabbing';
    container.style.transition = 'none'; // Disable transitions during drag

    event.preventDefault();
  }

  public onMouseMove(event: MouseEvent): void {
    if (!this.isDragging) return;

    event.preventDefault();
    const currentTime = performance.now();
    const deltaTime = currentTime - this.lastTimestamp;
    const deltaX = event.pageX - this.lastTouchX;

    // Calculate velocity for momentum
    if (deltaTime > 0) {
      this.velocity = deltaX / deltaTime;
    }

    const x = event.pageX - this.carouselContainer.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 3; // Increased multiplier for faster response
    this.carouselContainer.nativeElement.scrollLeft = this.scrollLeft - walk;

    this.lastTouchX = event.pageX;
    this.lastTimestamp = currentTime;

    // Handle infinite scroll during drag
    this.handleInfiniteScrollDuringDrag();
  }

  public onMouseUp(): void {
    this.isDragging = false;
    const container = this.carouselContainer.nativeElement;

    // Re-enable smooth transitions
    container.style.transition =
      'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    container.style.cursor = 'grab';

    // Apply momentum scrolling
    this.applyMomentum();

    // Resume auto-scroll after a shorter delay
    setTimeout(() => {
      this.resumeAutoScroll();
    }, 500); // Reduced from 1000ms to 500ms
  }

  public onMouseLeave(): void {
    if (this.isDragging) {
      this.onMouseUp();
    }
    // Shorter delay for mouse leave
    setTimeout(() => {
      this.resumeAutoScroll();
    }, 200);
  }

  // Apply momentum scrolling after drag ends
  private applyMomentum(): void {
    if (Math.abs(this.velocity) < 0.1) return;

    const container = this.carouselContainer.nativeElement;
    let currentVelocity = this.velocity * 50; // Scale velocity

    const momentumScroll = () => {
      if (Math.abs(currentVelocity) < 0.5) return;

      container.scrollLeft -= currentVelocity;
      currentVelocity *= 0.95; // Friction factor for smooth deceleration

      this.handleInfiniteScrollDuringDrag();
      requestAnimationFrame(momentumScroll);
    };

    requestAnimationFrame(momentumScroll);
  }

  // Individual card drag handlers
  public onCardMouseDown(event: MouseEvent, index: number): void {
    event.preventDefault();
    this.onMouseDown(event);
  }

  // Enhanced touch support with improved responsiveness
  public onTouchStart(event: TouchEvent): void {
    const touch = event.touches[0];
    this.isDragging = true;
    this.startX = touch.pageX - this.carouselContainer.nativeElement.offsetLeft;
    this.scrollLeft = this.carouselContainer.nativeElement.scrollLeft;
    this.velocity = 0;
    this.lastTouchX = touch.pageX;
    this.lastTimestamp = performance.now();
    this.pauseAutoScroll();

    // Disable transitions during touch
    this.carouselContainer.nativeElement.style.transition = 'none';
    event.preventDefault();
  }

  public onTouchMove(event: TouchEvent): void {
    if (!this.isDragging) return;

    const touch = event.touches[0];
    const currentTime = performance.now();
    const deltaTime = currentTime - this.lastTimestamp;
    const deltaX = touch.pageX - this.lastTouchX;

    // Calculate velocity for momentum
    if (deltaTime > 0) {
      this.velocity = deltaX / deltaTime;
    }

    const x = touch.pageX - this.carouselContainer.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 3; // Increased sensitivity
    this.carouselContainer.nativeElement.scrollLeft = this.scrollLeft - walk;

    this.lastTouchX = touch.pageX;
    this.lastTimestamp = currentTime;

    this.handleInfiniteScrollDuringDrag();
    event.preventDefault();
  }

  public onTouchEnd(): void {
    this.isDragging = false;

    // Re-enable smooth transitions
    this.carouselContainer.nativeElement.style.transition =
      'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';

    // Apply momentum scrolling
    this.applyMomentum();

    setTimeout(() => {
      this.resumeAutoScroll();
    }, 500);
  }

  // Card-specific touch handlers
  public onCardTouchStart(event: TouchEvent, index: number): void {
    event.preventDefault();
    this.onTouchStart(event);
  }

  // Enhanced infinite scroll with smoother transitions
  private handleInfiniteScrollDuringDrag(): void {
    const container = this.carouselContainer.nativeElement;
    const maxScroll = container.scrollWidth / 2;
    const threshold = 50; // Add threshold for smoother transitions

    if (container.scrollLeft >= maxScroll - threshold) {
      container.scrollLeft = threshold;
      this.scrollLeft = threshold;
    } else if (container.scrollLeft <= threshold) {
      container.scrollLeft = maxScroll - threshold;
      this.scrollLeft = maxScroll - threshold;
    }
  }

  // Add global event listeners
  private addEventListeners(): void {
    document.addEventListener('mousemove', this.onDocumentMouseMove.bind(this));
    document.addEventListener('mouseup', this.onDocumentMouseUp.bind(this));
    document.addEventListener(
      'touchmove',
      this.onDocumentTouchMove.bind(this),
      { passive: false }
    );
    document.addEventListener('touchend', this.onDocumentTouchEnd.bind(this));
  }

  // Remove global event listeners
  private removeEventListeners(): void {
    document.removeEventListener(
      'mousemove',
      this.onDocumentMouseMove.bind(this)
    );
    document.removeEventListener('mouseup', this.onDocumentMouseUp.bind(this));
    document.removeEventListener(
      'touchmove',
      this.onDocumentTouchMove.bind(this)
    );
    document.removeEventListener(
      'touchend',
      this.onDocumentTouchEnd.bind(this)
    );
  }

  // Global document event handlers
  private onDocumentMouseMove(event: MouseEvent): void {
    this.onMouseMove(event);
  }

  private onDocumentMouseUp(): void {
    this.onMouseUp();
  }

  private onDocumentTouchMove(event: TouchEvent): void {
    this.onTouchMove(event);
  }

  private onDocumentTouchEnd(): void {
    this.onTouchEnd();
  }

  // Legacy drag start handler (keep for compatibility)
  public onDragStart(event: DragEvent, index: number): void {
    event.preventDefault(); // Prevent default HTML5 drag
    this.pauseAutoScroll();
  }

  // Prevent context menu on right click during drag
  public onContextMenu(event: MouseEvent): void {
    if (this.isDragging) {
      event.preventDefault();
    }
  }

  // Prevent text selection during drag
  public onSelectStart(event: Event): void {
    if (this.isDragging) {
      event.preventDefault();
    }
  }
}
