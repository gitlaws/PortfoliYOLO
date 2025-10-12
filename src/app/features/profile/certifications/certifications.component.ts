import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Theme } from '../../../shared/models/theme.enum';
import { ThemeService } from '../../../shared/services/theme/theme.service';

interface CertificationSlide {
  name: string;
  id: string;
  category: string;
  certifications: Certification[];
}

interface Certification {
  name: string;
  provider: string;
  priority: 'Critical' | 'High' | 'Medium';
  icon: string;
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss',
})
export class CertificationsComponent implements OnInit {
  theme!: 'light' | 'dark';
  currentSlide = 0;
  totalSlides = 5;

  slides: CertificationSlide[] = [
    {
      name: 'Frontend',
      id: 'frontend',
      category: 'UI/UX',
      certifications: [
        {
          name: 'React Developer Certification',
          provider: 'Meta (Facebook)',
          priority: 'Critical',
          icon: 'react',
        },
        {
          name: 'Angular Certified Developer',
          provider: 'Google',
          priority: 'Critical',
          icon: 'angular',
        },
        {
          name: 'Vue.js Certification',
          provider: 'Vue School',
          priority: 'High',
          icon: 'vue',
        },
        {
          name: 'TypeScript Expert',
          provider: 'Microsoft',
          priority: 'High',
          icon: 'typescript',
        },
      ],
    },
    {
      name: 'Backend',
      id: 'backend',
      category: 'Server-Side',
      certifications: [
        {
          name: 'Node.js Certified Developer',
          provider: 'OpenJS Foundation',
          priority: 'Critical',
          icon: 'nodejs',
        },
        {
          name: 'Express.js Mastery',
          provider: 'StrongLoop',
          priority: 'Critical',
          icon: 'express',
        },
        {
          name: 'Python Web Developer',
          provider: 'Python Institute',
          priority: 'High',
          icon: 'python',
        },
        {
          name: 'GraphQL Certified',
          provider: 'The Guild',
          priority: 'High',
          icon: 'graphql',
        },
      ],
    },
    {
      name: 'Database',
      id: 'database',
      category: 'Data',
      certifications: [
        {
          name: 'MongoDB Certified Developer',
          provider: 'MongoDB University',
          priority: 'Critical',
          icon: 'mongodb',
        },
        {
          name: 'PostgreSQL Expert',
          provider: 'PostgreSQL Global Development Group',
          priority: 'Critical',
          icon: 'postgres',
        },
        {
          name: 'Redis Certified Developer',
          provider: 'Redis Labs',
          priority: 'High',
          icon: 'redis',
        },
        {
          name: 'MySQL Database Administrator',
          provider: 'Oracle',
          priority: 'Medium',
          icon: 'mysql',
        },
      ],
    },
    {
      name: 'Cloud/DevOps',
      id: 'cloud',
      category: 'Infrastructure',
      certifications: [
        {
          name: 'AWS Certified Developer',
          provider: 'Amazon Web Services',
          priority: 'Critical',
          icon: 'aws',
        },
        {
          name: 'Docker Certified Associate',
          provider: 'Docker Inc.',
          priority: 'Critical',
          icon: 'docker',
        },
        {
          name: 'Kubernetes Administrator',
          provider: 'Cloud Native Computing Foundation',
          priority: 'High',
          icon: 'kubernetes',
        },
        {
          name: 'Terraform Associate',
          provider: 'HashiCorp',
          priority: 'High',
          icon: 'terraform',
        },
      ],
    },
    {
      name: 'Testing',
      id: 'testing',
      category: 'QA',
      certifications: [
        {
          name: 'Jest Testing Framework',
          provider: 'Facebook Open Source',
          priority: 'High',
          icon: 'jest',
        },
        {
          name: 'Cypress E2E Testing',
          provider: 'Cypress.io',
          priority: 'High',
          icon: 'cypress',
        },
        {
          name: 'Selenium WebDriver',
          provider: 'Selenium Project',
          priority: 'Medium',
          icon: 'selenium',
        },
        {
          name: 'Playwright Testing',
          provider: 'Microsoft',
          priority: 'Medium',
          icon: 'playwright',
        },
      ],
    },
  ];

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.currentTheme.subscribe((theme) => {
      this.theme = theme === Theme.Light ? 'light' : 'dark';
    });
  }

  nextSlide(): void {
    if (this.currentSlide < this.totalSlides - 1) {
      this.currentSlide++;
    }
  }

  previousSlide(): void {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  getPriorityClass(priority: string): string {
    switch (priority) {
      case 'Critical':
        return 'priority-critical';
      case 'High':
        return 'priority-high';
      case 'Medium':
        return 'priority-medium';
      default:
        return 'priority-medium';
    }
  }
}
