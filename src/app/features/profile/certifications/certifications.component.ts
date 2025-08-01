import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  icon: string;
  org: string;
  certLink: string;
  datetime: string;
  altText?: string;
}

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class CertificationsComponent implements OnInit, OnDestroy {
  @ViewChild('certGrid', { static: false })
  certGridRef!: ElementRef<HTMLElement>;

  certifications: Certification[] = [
    {
      name: 'Angular Developer Certification',
      issuer: 'Google',
      date: 'May 2024',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      org: 'Google',
      certLink: '#',
      datetime: '2024-05',
      altText: 'Angular Logo',
    },
    {
      name: 'Modern JavaScript Course',
      issuer: 'Mozilla Developer Network',
      date: 'Jan 2024',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      org: 'Mozilla Developer Network',
      certLink: '#',
      datetime: '2024-01',
      altText: 'JavaScript Icon',
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta',
      date: 'Mar 2024',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      org: 'Meta',
      certLink: '#',
      datetime: '2024-03',
      altText: 'React Icon',
    },
    {
      name: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'Feb 2024',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
      org: 'Amazon Web Services',
      certLink: '#',
      datetime: '2024-02',
      altText: 'AWS Icon',
    },
    {
      name: 'Node.js Backend Development',
      issuer: 'Node.js Foundation',
      date: 'Dec 2023',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      org: 'Node.js Foundation',
      certLink: '#',
      datetime: '2023-12',
      altText: 'Node.js Icon',
    },
    {
      name: 'Docker Containerization',
      issuer: 'Docker Inc.',
      date: 'Nov 2023',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      org: 'Docker Inc.',
      certLink: '#',
      datetime: '2023-11',
      altText: 'Docker Icon',
    },
    {
      name: 'TypeScript Advanced Concepts',
      issuer: 'Microsoft',
      date: 'Oct 2023',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      org: 'Microsoft',
      certLink: '#',
      datetime: '2023-10',
      altText: 'TypeScript Icon',
    },
    {
      name: 'Python for Data Science',
      issuer: 'Python Software Foundation',
      date: 'Sep 2023',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      org: 'Python Software Foundation',
      certLink: '#',
      datetime: '2023-09',
      altText: 'Python Icon',
    },
    {
      name: 'Git Version Control Mastery',
      issuer: 'GitHub',
      date: 'Aug 2023',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      org: 'GitHub',
      certLink: '#',
      datetime: '2023-08',
      altText: 'Git Icon',
    },
    {
      name: 'Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      date: 'Jul 2023',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
      org: 'Cloud Native Computing Foundation',
      certLink: '#',
      datetime: '2023-07',
      altText: 'Kubernetes Icon',
    },
    {
      name: 'MongoDB Database Developer',
      issuer: 'MongoDB University',
      date: 'Jun 2023',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      org: 'MongoDB University',
      certLink: '#',
      datetime: '2023-06',
      altText: 'MongoDB Icon',
    },
    {
      name: 'PostgreSQL Database Administration',
      issuer: 'PostgreSQL Global Development Group',
      date: 'May 2023',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      org: 'PostgreSQL Global Development Group',
      certLink: '#',
      datetime: '2023-05',
      altText: 'PostgreSQL Icon',
    },
  ];

  // Duplicate certifications for seamless loop
  duplicatedCertifications: Certification[] = [];

  theme: 'light' | 'dark' = 'light';

  // Modal state
  isModalOpen = false;
  selectedCertification: Certification | null = null;
  certificateGifUrl =
    'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExN21ka2lqZW04YjVxem1ueWVwN3k1bWRuYWgwNzdjenhrajJ4eW5nMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/t7zOZJb44BtHF41Vbo/giphy.gif';

  // ==========================================
  // DRAG SCROLL PROPERTIES
  // ==========================================
  isDragging = false;
  isAutoScrolling = true;
  hasMoved = false; // Track if user has actually moved during drag
  dragStartX = 0;
  dragThreshold = 5;
  velocity = 0;
  lastMoveTime = 0;
  lastMoveX = 0;
  inertiaAnimationId: number | null = null;
  autoScrollResumeTimeout: number | null = null;

  // Transform-based dragging
  currentTransform = 0;
  initialTransform = 0;
  maxTransform = 0;
  minTransform = 0;

  // Bound methods for proper cleanup
  private boundOnDragMove!: (e: MouseEvent) => void;
  private boundOnDragEnd!: (e: MouseEvent) => void;
  private boundOnTouchMove!: (e: TouchEvent) => void;
  private boundOnTouchEnd!: (e: TouchEvent) => void;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    // Create duplicated array for seamless scrolling
    this.duplicatedCertifications = [
      ...this.certifications,
      ...this.certifications,
    ];

    // Add event listeners
    document.addEventListener('keydown', this.handleEscapeKey.bind(this));

    // Initialize drag scroll after view init
    setTimeout(() => {
      this.initializeDragScroll();
      this.calculateTransformLimits();
    }, 100);
  }

  ngOnDestroy() {
    document.removeEventListener('keydown', this.handleEscapeKey.bind(this));
    this.removeDragScrollListeners();

    if (this.autoScrollResumeTimeout) {
      clearTimeout(this.autoScrollResumeTimeout);
    }
    if (this.inertiaAnimationId) {
      cancelAnimationFrame(this.inertiaAnimationId);
    }
  }

  // ==========================================
  // TRANSFORM CALCULATIONS
  // ==========================================
  calculateTransformLimits() {
    if (!this.certGridRef?.nativeElement) return;

    const container = this.certGridRef.nativeElement;
    const containerWidth =
      container.parentElement?.clientWidth || window.innerWidth;

    // Calculate card width including gap (adjust based on your SCSS)
    const cardWidth = 160; // From SCSS $card-width-desktop
    const gap = 16; // From SCSS $gap-desktop
    const totalCards = this.certifications.length;
    const totalWidth = totalCards * (cardWidth + gap);

    // Set limits for transform
    this.maxTransform = gap; // Small positive allowance
    this.minTransform = -(totalWidth - containerWidth + gap);

    console.log('Transform limits:', {
      containerWidth,
      totalWidth,
      maxTransform: this.maxTransform,
      minTransform: this.minTransform,
    });
  }

  // ==========================================
  // DRAG SCROLL IMPLEMENTATION
  // ==========================================
  initializeDragScroll() {
    if (!this.certGridRef?.nativeElement) return;

    const grid = this.certGridRef.nativeElement;

    // Create bound methods for proper cleanup
    this.boundOnDragMove = this.onDragMove.bind(this);
    this.boundOnDragEnd = this.onDragEnd.bind(this);
    this.boundOnTouchMove = this.onTouchMove.bind(this);
    this.boundOnTouchEnd = this.onTouchEnd.bind(this);

    // Mouse events - only mousedown on grid, move/up on document
    grid.addEventListener('mousedown', this.onDragStart.bind(this));

    // Touch events
    grid.addEventListener('touchstart', this.onTouchStart.bind(this), {
      passive: false,
    });

    // Prevent context menu during drag
    grid.addEventListener('contextmenu', this.preventContextMenu.bind(this));

    // Prevent text selection
    grid.addEventListener('selectstart', (e) => e.preventDefault());
  }

  removeDragScrollListeners() {
    if (!this.certGridRef?.nativeElement) return;

    const grid = this.certGridRef.nativeElement;

    // Remove grid listeners
    grid.removeEventListener('mousedown', this.onDragStart.bind(this));
    grid.removeEventListener('touchstart', this.onTouchStart.bind(this));
    grid.removeEventListener('contextmenu', this.preventContextMenu.bind(this));

    // Remove document listeners
    this.removeDocumentListeners();
  }

  private addDocumentListeners() {
    document.addEventListener('mousemove', this.boundOnDragMove);
    document.addEventListener('mouseup', this.boundOnDragEnd);
    document.addEventListener('touchmove', this.boundOnTouchMove, {
      passive: false,
    });
    document.addEventListener('touchend', this.boundOnTouchEnd);
  }

  private removeDocumentListeners() {
    document.removeEventListener('mousemove', this.boundOnDragMove);
    document.removeEventListener('mouseup', this.boundOnDragEnd);
    document.removeEventListener('touchmove', this.boundOnTouchMove);
    document.removeEventListener('touchend', this.boundOnTouchEnd);
  }

  // ==========================================
  // MOUSE EVENTS
  // ==========================================
  onDragStart(e: MouseEvent) {
    // Only handle left mouse button
    if (e.button !== 0) return;

    e.preventDefault();
    this.startDrag(e.clientX);
    this.addDocumentListeners();
  }

  onDragMove(e: MouseEvent) {
    if (!this.isDragging && !this.hasMoved) return;

    e.preventDefault();
    this.handleDragMove(e.clientX);
  }

  onDragEnd(e: MouseEvent) {
    e.preventDefault();
    this.endDrag();
    this.removeDocumentListeners();
  }

  // ==========================================
  // TOUCH EVENTS
  // ==========================================
  onTouchStart(e: TouchEvent) {
    if (e.touches.length !== 1) return;

    e.preventDefault();
    const touch = e.touches[0];
    this.startDrag(touch.clientX);
    this.addDocumentListeners();
  }

  onTouchMove(e: TouchEvent) {
    if (!this.isDragging && !this.hasMoved) return;
    if (e.touches.length !== 1) return;

    e.preventDefault();
    const touch = e.touches[0];
    this.handleDragMove(touch.clientX);
  }

  onTouchEnd(e: TouchEvent) {
    e.preventDefault();
    this.endDrag();
    this.removeDocumentListeners();
  }

  // ==========================================
  // DRAG LOGIC
  // ==========================================
  startDrag(clientX: number) {
    if (!this.certGridRef?.nativeElement) return;

    this.dragStartX = clientX;
    this.lastMoveX = clientX;
    this.initialTransform = this.currentTransform;
    this.velocity = 0;
    this.lastMoveTime = Date.now();
    this.hasMoved = false;

    // Stop auto-scroll and any ongoing animations
    this.pauseAutoScroll();

    if (this.inertiaAnimationId) {
      cancelAnimationFrame(this.inertiaAnimationId);
      this.inertiaAnimationId = null;
    }

    console.log(
      'Drag started at:',
      clientX,
      'Initial transform:',
      this.initialTransform
    );
  }

  handleDragMove(clientX: number) {
    if (!this.certGridRef?.nativeElement) return;

    const deltaX = clientX - this.dragStartX;
    const moveDistance = Math.abs(deltaX);

    // Check if we've moved enough to start dragging
    if (!this.isDragging && moveDistance > this.dragThreshold) {
      this.isDragging = true;
      this.hasMoved = true;
      console.log('Drag threshold reached, starting drag');
      this.cdr.detectChanges();
    }

    if (this.isDragging) {
      const currentTime = Date.now();
      const timeDelta = currentTime - this.lastMoveTime;
      const moveDelta = clientX - this.lastMoveX;

      // Calculate velocity for inertia
      if (timeDelta > 0) {
        this.velocity = moveDelta / timeDelta;
      }

      // Calculate new transform position
      let newTransform = this.initialTransform + deltaX;

      // Apply elastic boundaries
      if (newTransform > this.maxTransform) {
        const excess = newTransform - this.maxTransform;
        newTransform = this.maxTransform + excess * 0.3;
      } else if (newTransform < this.minTransform) {
        const excess = newTransform - this.minTransform;
        newTransform = this.minTransform + excess * 0.3;
      }

      this.currentTransform = newTransform;
      this.applyTransform();

      this.lastMoveTime = currentTime;
      this.lastMoveX = clientX;

      console.log('Dragging:', {
        deltaX,
        newTransform,
        velocity: this.velocity,
      });
    }
  }

  endDrag() {
    console.log(
      'Drag ended, isDragging:',
      this.isDragging,
      'hasMoved:',
      this.hasMoved
    );

    if (this.isDragging) {
      this.isDragging = false;

      // Apply inertia scrolling
      this.applyInertiaScrolling();

      // Resume auto-scroll after delay
      this.scheduleAutoScrollResume();
    }

    this.hasMoved = false;
    this.cdr.detectChanges();
  }

  // ==========================================
  // TRANSFORM APPLICATION
  // ==========================================
  applyTransform() {
    if (!this.certGridRef?.nativeElement) return;

    this.certGridRef.nativeElement.style.transform = `translateX(${this.currentTransform}px)`;
  }

  resetTransform() {
    if (!this.certGridRef?.nativeElement) return;

    this.currentTransform = 0;
    this.certGridRef.nativeElement.style.transform = '';
    console.log('Transform reset');
  }

  // ==========================================
  // INERTIA SCROLLING
  // ==========================================
  applyInertiaScrolling() {
    const absVelocity = Math.abs(this.velocity);
    console.log('Applying inertia with velocity:', this.velocity);

    if (!this.certGridRef?.nativeElement || absVelocity < 0.1) {
      this.snapToBoundaries();
      return;
    }

    const friction = 0.92;
    const minVelocity = 0.1;

    const animate = () => {
      if (!this.certGridRef?.nativeElement) return;

      this.velocity *= friction;

      if (Math.abs(this.velocity) < minVelocity) {
        this.inertiaAnimationId = null;
        this.snapToBoundaries();
        return;
      }

      let newTransform = this.currentTransform + this.velocity * 16;

      // Handle boundaries during inertia
      if (newTransform > this.maxTransform) {
        newTransform = this.maxTransform;
        this.velocity = 0;
      } else if (newTransform < this.minTransform) {
        newTransform = this.minTransform;
        this.velocity = 0;
      }

      this.currentTransform = newTransform;
      this.applyTransform();

      this.inertiaAnimationId = requestAnimationFrame(animate);
    };

    this.inertiaAnimationId = requestAnimationFrame(animate);
  }

  snapToBoundaries() {
    let targetTransform = this.currentTransform;

    // Snap back to boundaries if exceeded
    if (this.currentTransform > this.maxTransform) {
      targetTransform = this.maxTransform;
    } else if (this.currentTransform < this.minTransform) {
      targetTransform = this.minTransform;
    }

    if (targetTransform !== this.currentTransform) {
      this.animateToPosition(targetTransform);
    }
  }

  animateToPosition(targetTransform: number) {
    if (!this.certGridRef?.nativeElement) return;

    const startTransform = this.currentTransform;
    const distance = targetTransform - startTransform;
    const duration = 300;
    const startTime = Date.now();

    console.log('Animating to position:', targetTransform);

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out function
      const easeOut = 1 - Math.pow(1 - progress, 3);

      this.currentTransform = startTransform + distance * easeOut;
      this.applyTransform();

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }

  // ==========================================
  // AUTO-SCROLL CONTROL
  // ==========================================
  pauseAutoScroll() {
    this.isAutoScrolling = false;

    if (this.autoScrollResumeTimeout) {
      clearTimeout(this.autoScrollResumeTimeout);
      this.autoScrollResumeTimeout = null;
    }

    console.log('Auto-scroll paused');
  }

  resumeAutoScroll() {
    this.isAutoScrolling = true;
    this.resetTransform();
    console.log('Auto-scroll resumed');
  }

  scheduleAutoScrollResume() {
    this.autoScrollResumeTimeout = window.setTimeout(() => {
      if (!this.isDragging) {
        this.resumeAutoScroll();
      }
    }, 3000);
  }

  // ==========================================
  // HOVER INTERACTIONS
  // ==========================================
  onGridMouseEnter() {
    if (!this.isDragging) {
      this.pauseAutoScroll();
    }
  }

  onGridMouseLeave() {
    if (!this.isDragging) {
      this.scheduleAutoScrollResume();
    }
  }

  onGridFocus() {
    if (!this.isDragging) {
      this.pauseAutoScroll();
    }
  }

  onGridBlur() {
    if (!this.isDragging) {
      this.scheduleAutoScrollResume();
    }
  }

  // ==========================================
  // UTILITY METHODS
  // ==========================================
  preventContextMenu(e: Event) {
    if (this.isDragging || this.hasMoved) {
      e.preventDefault();
    }
  }

  get gridClasses() {
    return {
      'seamless-loop': this.isAutoScrolling && !this.isDragging,
      dragging: this.isDragging,
      'user-interacting': !this.isAutoScrolling || this.isDragging,
    };
  }

  // ==========================================
  // EXISTING METHODS (UNCHANGED)
  // ==========================================
  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
  }

  trackByCertification(index: number, cert: Certification): string {
    return `${cert.name}-${cert.datetime}-${index}`;
  }

  getModalId(certification: Certification | null): string | null {
    if (!certification) return null;
    return (
      'modal-title-' + certification.name.replace(/\s+/g, '-').toLowerCase()
    );
  }

  openCertificateModal(certification: Certification, event: Event) {
    // Prevent modal opening during drag or if user has moved
    if (this.isDragging || this.hasMoved) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    this.selectedCertification = certification;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeCertificateModal() {
    this.isModalOpen = false;
    this.selectedCertification = null;
    document.body.style.overflow = 'auto';
  }

  onModalBackdropClick(event: Event) {
    if (event.target === event.currentTarget) {
      this.closeCertificateModal();
    }
  }

  handleEscapeKey(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.isModalOpen) {
      this.closeCertificateModal();
    }
  }

  onImageError(event: any) {
    event.target.src =
      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNiA4QzE4LjIwOTEgOCAyMCAxMS43OTA5IDIwIDE2QzIwIDIwLjIwOTEgMTguMjA5MSAyNCAxNiAyNEMxMy43OTA5IDI0IDEyIDIwLjIwOTEgMTIgMTZDMTIgMTEuNzkwOSAxMy43OTA5IDggMTYgOFoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+Cg==';
    event.target.alt = 'Certificate icon';
  }
}
