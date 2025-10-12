import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
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
  @ViewChild('carouselContainer', { static: true })
  carouselContainer!: ElementRef;

  theme!: 'light' | 'dark';
  private isPaused = false;

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
  ];

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.currentTheme.subscribe((theme) => {
      this.theme = theme === Theme.Light ? 'light' : 'dark';
    });
  }

  ngAfterViewInit(): void {
    // Animation is handled via CSS
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  pauseAutoScroll(): void {
    this.isPaused = true;
  }

  resumeAutoScroll(): void {
    this.isPaused = false;
  }

  onDragStart(event: DragEvent, index: number): void {
    event.preventDefault();
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
