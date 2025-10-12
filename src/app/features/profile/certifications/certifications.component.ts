import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Theme } from '../../../shared/models/theme.enum';
import { ThemeService } from '../../../shared/services/theme/theme.service';

interface Certification {
  title: string;
  organization: string;
  date: string;
  icon: string;
  link: string;
  status: 'completed' | 'in-progress' | 'planned';
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss',
})
export class CertificationsComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  theme!: 'light' | 'dark';

  // Pagination (fixed 4 per page, 2x2)
  currentPage = 0;
  itemsPerPage = 4;
  totalPages = 1;

  // Auto-advance
  private autoAdvanceInterval?: ReturnType<typeof setInterval>;
  private resumeTimeout?: ReturnType<typeof setTimeout>;
  private readonly STORAGE_KEY = 'certifications-current-page';
  private readonly AUTO_ADVANCE_DELAY = 8000; // 8s
  private readonly RESUME_DELAY = 10000; // 10s after interaction

  // Bound key handler for cleanup
  private keydownHandler = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') this.prevPage();
    if (event.key === 'ArrowRight') this.nextPage();
    if (event.key >= '1' && event.key <= '9') {
      const pageIndex = parseInt(event.key, 10) - 1;
      if (pageIndex < this.totalPages) this.goToPage(pageIndex);
    }
  };

  certifications: Certification[] = [
    {
      title: 'Angular Developer Certification',
      organization: 'Google',
      date: 'May 2024',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      link: '#',
      status: 'completed',
    },
    {
      title: 'Modern JavaScript Course',
      organization: 'Mozilla Developer Network',
      date: 'Jan 2024',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      link: '#',
      status: 'in-progress',
    },
    {
      title: 'React Developer Certification',
      organization: 'Meta',
      date: 'Mar 2024',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      link: '#',
      status: 'completed',
    },
    {
      title: 'AWS Cloud Practitioner',
      organization: 'Amazon Web Services',
      date: 'Feb 2024',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
      link: '#',
      status: 'planned',
    },
    {
      title: 'Node.js Backend Development',
      organization: 'Node.js Foundation',
      date: 'Dec 2023',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      link: '#',
      status: 'completed',
    },
    {
      title: 'Docker Containerization',
      organization: 'Docker Inc.',
      date: 'Nov 2023',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      link: '#',
      status: 'in-progress',
    },
    {
      title: 'TypeScript Advanced',
      organization: 'Microsoft',
      date: 'Oct 2023',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      link: '#',
      status: 'completed',
    },
    {
      title: 'MongoDB Developer',
      organization: 'MongoDB University',
      date: 'Sep 2023',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      link: '#',
      status: 'planned',
    },
    {
      title: 'Vue.js Essentials',
      organization: 'Vue.js',
      date: 'Aug 2023',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      link: '#',
      status: 'completed',
    },
    {
      title: 'Python for Beginners',
      organization: 'Python Software Foundation',
      date: 'Jul 2023',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      link: '#',
      status: 'planned',
    },
  ];

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.currentTheme.subscribe((theme) => {
      this.theme = theme === Theme.Light ? 'light' : 'dark';
    });

    const savedPage = localStorage.getItem(this.STORAGE_KEY);
    if (savedPage) this.currentPage = parseInt(savedPage, 10) || 0;

    this.updatePagination();
    document.addEventListener('keydown', this.keydownHandler);
  }

  ngAfterViewInit(): void {
    this.startAutoAdvance();
  }

  ngOnDestroy(): void {
    this.stopAutoAdvance();
    if (this.resumeTimeout) clearTimeout(this.resumeTimeout);
    document.removeEventListener('keydown', this.keydownHandler);
  }

  // Pagination
  private updatePagination(): void {
    this.totalPages = Math.ceil(this.certifications.length / this.itemsPerPage);
    if (this.currentPage >= this.totalPages) this.currentPage = 0;
    this.saveCurrentPage();
  }

  private saveCurrentPage(): void {
    localStorage.setItem(this.STORAGE_KEY, this.currentPage.toString());
  }

  nextPage(pauseAuto = true): void {
    if (pauseAuto) this.pauseAutoAdvance();
    this.currentPage = (this.currentPage + 1) % this.totalPages;
    this.saveCurrentPage();
  }

  prevPage(): void {
    this.pauseAutoAdvance();
    this.currentPage =
      (this.currentPage - 1 + this.totalPages) % this.totalPages;
    this.saveCurrentPage();
  }

  goToPage(pageIndex: number): void {
    if (pageIndex >= 0 && pageIndex < this.totalPages) {
      this.pauseAutoAdvance();
      this.currentPage = pageIndex;
      this.saveCurrentPage();
    }
  }

  // Auto-advance
  private startAutoAdvance(): void {
    this.stopAutoAdvance();
    this.autoAdvanceInterval = setInterval(
      () => this.nextPage(false),
      this.AUTO_ADVANCE_DELAY
    );
  }

  private stopAutoAdvance(): void {
    if (this.autoAdvanceInterval) {
      clearInterval(this.autoAdvanceInterval);
      this.autoAdvanceInterval = undefined;
    }
  }

  private pauseAutoAdvance(): void {
    this.stopAutoAdvance();
    if (this.resumeTimeout) clearTimeout(this.resumeTimeout);
    this.resumeTimeout = setTimeout(
      () => this.startAutoAdvance(),
      this.RESUME_DELAY
    );
  }

  // Data helpers
  getSlicedCerts(): Certification[] {
    const start = this.currentPage * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.certifications.slice(start, end);
  }

  getPageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i);
  }

  // Always two columns (2x2 per page across all breakpoints)
  getGridColumns(): string {
    return 'repeat(2, minmax(0, 1fr))';
  }

  getStatusClass(status: string): string {
    return `status-${status}`;
  }

  onCertificateClick(cert: Certification): void {
    if (cert.link && cert.link !== '#') {
      window.open(cert.link, '_blank', 'noopener,noreferrer');
    }
  }
}
