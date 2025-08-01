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

  duplicatedCertifications = [...this.certifications, ...this.certifications];
  theme: 'light' | 'dark' = 'light';
  isModalOpen = false;
  selectedCertification: Certification | null = null;
  certificateGifUrl =
    'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExN21ka2lqZW04YjVxem1ueWVwN3k1bWRuYWgwNzdjenhrajJ4eW5nMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/t7zOZJb44BtHF41Vbo/giphy.gif';

  // Simplified drag state
  isDragging = false;
  isAutoScrolling = true;
  hasMoved = false;
  private startX = 0;
  private transform = 0;
  private timeout: number | null = null;
  private events = new Map<string, EventListener>();

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    document.addEventListener('keydown', this.onEscape);
    setTimeout(() => this.initDrag(), 100);
  }

  ngOnDestroy() {
    document.removeEventListener('keydown', this.onEscape);
    this.cleanup();
  }

  // Drag implementation
  private initDrag() {
    if (!this.certGridRef?.nativeElement) return;

    const grid = this.certGridRef.nativeElement;

    this.events.set('start', (e: any) =>
      this.start(e.touches?.[0]?.clientX || e.clientX, e)
    );
    this.events.set('move', (e: any) =>
      this.move(e.touches?.[0]?.clientX || e.clientX, e)
    );
    this.events.set('end', (e: any) => this.end(e));

    grid.addEventListener('mousedown', this.events.get('start')!);
    grid.addEventListener('touchstart', this.events.get('start')!, {
      passive: false,
    });
  }

  private start(x: number, e: Event) {
    e.preventDefault();
    this.startX = x;
    this.hasMoved = false;
    this.pause();

    document.addEventListener('mousemove', this.events.get('move')!);
    document.addEventListener('touchmove', this.events.get('move')!, {
      passive: false,
    });
    document.addEventListener('mouseup', this.events.get('end')!);
    document.addEventListener('touchend', this.events.get('end')!);
  }

  private move(x: number, e: Event) {
    if (!x) return;

    const delta = x - this.startX;

    if (!this.isDragging && Math.abs(delta) > 5) {
      this.isDragging = true;
      this.hasMoved = true;
      this.cdr.detectChanges();
    }

    if (this.isDragging) {
      e.preventDefault();
      this.transform = delta;
      this.apply();
    }
  }

  private end(e: Event) {
    e.preventDefault();
    this.isDragging = false;
    this.resume();
    this.cdr.detectChanges();

    ['mousemove', 'touchmove', 'mouseup', 'touchend'].forEach((type) =>
      document.removeEventListener(
        type,
        this.events.get('move')! || this.events.get('end')!
      )
    );
  }

  private apply() {
    if (!this.certGridRef?.nativeElement) return;
    this.certGridRef.nativeElement.style.transform = `translateX(${this.transform}px)`;
  }

  private pause() {
    this.isAutoScrolling = false;
    if (this.timeout) clearTimeout(this.timeout);
  }

  private resume() {
    this.timeout = window.setTimeout(() => {
      this.isAutoScrolling = true;
      this.transform = 0;
      this.apply();
    }, 3000);
  }

  private cleanup() {
    if (this.timeout) clearTimeout(this.timeout);
  }

  // Event handlers
  onGridMouseEnter = () => !this.isDragging && this.pause();
  onGridMouseLeave = () => !this.isDragging && this.resume();
  onGridFocus = () => !this.isDragging && this.pause();
  onGridBlur = () => !this.isDragging && this.resume();

  get gridClasses() {
    return {
      'seamless-loop': this.isAutoScrolling && !this.isDragging,
      dragging: this.isDragging,
      'user-interacting': !this.isAutoScrolling || this.isDragging,
    };
  }

  // Utility methods
  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
  }

  trackByCertification = (i: number, cert: Certification) =>
    `${cert.name}-${cert.datetime}-${i}`;

  openCertificateModal(cert: Certification, e: Event) {
    if (this.isDragging || this.hasMoved) {
      e.preventDefault();
      return;
    }

    e.preventDefault();
    this.selectedCertification = cert;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeCertificateModal() {
    this.isModalOpen = false;
    this.selectedCertification = null;
    document.body.style.overflow = 'auto';
  }

  onModalBackdropClick = (e: Event) => {
    if (e.target === e.currentTarget) this.closeCertificateModal();
  };

  private onEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && this.isModalOpen) this.closeCertificateModal();
  };

  onImageError(e: any) {
    e.target.src =
      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNiA4QzE4LjIwOTEgOCAyMCAxMS43OTA5IDIwIDE2QzIwIDIwLjIwOTEgMTguMjA5MSAyNCAxNiAyNEMxMy43OTA5IDI0IDEyIDIwLjIwOTEgMTIgMTZDMTIgMTEuNzkwOSAxMy43OTA5IDggMTYgOFoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+Cg==';
    e.target.alt = 'Certificate icon';
  }
}
