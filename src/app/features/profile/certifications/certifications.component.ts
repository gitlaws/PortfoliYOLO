import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  dateIssued: Date;
  expiryDate?: Date;
  credentialUrl?: string;
  issuerLogo?: string;
  description?: string;
  shortDescription?: string;
  skills?: string[];
  isFlipped: boolean;
  credentialId?: string;
  status: 'active' | 'expired' | 'expiring-soon';
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss',
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(100%)' }),
        animate(
          '300ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '300ms ease-in',
          style({ opacity: 0, transform: 'translateY(100%)' })
        ),
      ]),
    ]),
  ],
})
export class CertificationsComponent {
  showAllDetails = false;

  certifications: Certification[] = [
    {
      id: '1',
      title: 'Angular Professional Developer',
      issuer: 'Google',
      dateIssued: new Date('2024-03-15'),
      expiryDate: new Date('2026-03-15'),
      credentialUrl: 'https://developers.google.com/certification/angular',
      issuerLogo: 'assets/images/logos/google-logo.png',
      description:
        'Comprehensive certification covering Angular framework fundamentals.',
      shortDescription: 'Professional-level Angular development certification',
      skills: [
        'Angular',
        'TypeScript',
        'RxJS',
        'Testing',
        'Component Architecture',
      ],
      isFlipped: false,
      credentialId: 'ANG-2024-001234',
      status: 'active',
    },
    {
      id: '2',
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      dateIssued: new Date('2023-11-20'),
      expiryDate: new Date('2026-11-20'),
      credentialUrl:
        'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
      issuerLogo: 'assets/images/logos/aws-logo.png',
      description:
        'Validates expertise in designing distributed systems on AWS.',
      shortDescription: 'Cloud architecture and AWS services expertise',
      skills: ['AWS', 'Cloud Architecture', 'EC2', 'S3', 'Lambda'],
      isFlipped: false,
      credentialId: 'AWS-SAA-2023-567890',
      status: 'active',
    },
    {
      id: '3',
      title: 'Microsoft Azure Fundamentals',
      issuer: 'Microsoft',
      dateIssued: new Date('2023-08-10'),
      credentialUrl:
        'https://docs.microsoft.com/en-us/learn/certifications/azure-fundamentals/',
      issuerLogo: 'assets/images/logos/microsoft-logo.png',
      description: 'Foundation-level understanding of Azure services.',
      shortDescription: 'Azure cloud services fundamentals',
      skills: ['Azure', 'Cloud Computing', 'Azure Services'],
      isFlipped: false,
      credentialId: 'AZ-900-2023-112233',
      status: 'active',
    },
    {
      id: '4',
      title: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      dateIssued: new Date('2024-01-25'),
      expiryDate: new Date('2027-01-25'),
      credentialUrl: 'https://www.cncf.io/certification/cka/',
      issuerLogo: 'assets/images/logos/cncf-logo.png',
      description:
        'Demonstrates skills required to be a successful Kubernetes Administrator.',
      shortDescription: 'Container orchestration and Kubernetes management',
      skills: ['Kubernetes', 'Docker', 'Container Orchestration'],
      isFlipped: false,
      credentialId: 'CKA-2024-445566',
      status: 'active',
    },
    {
      id: '5',
      title: 'CompTIA Security+',
      issuer: 'CompTIA',
      dateIssued: new Date('2022-06-15'),
      expiryDate: new Date('2025-06-15'),
      credentialUrl: 'https://www.comptia.org/certifications/security',
      issuerLogo: 'assets/images/logos/comptia-logo.png',
      description:
        'Validates baseline cybersecurity skills and best practices.',
      shortDescription: 'Cybersecurity fundamentals and best practices',
      skills: ['Network Security', 'Risk Management', 'Cryptography'],
      isFlipped: false,
      credentialId: 'SEC-2022-334455',
      status: 'expiring-soon',
    },
    {
      id: '6',
      title: 'PMP - Project Management Professional',
      issuer: 'Project Management Institute',
      dateIssued: new Date('2023-02-10'),
      expiryDate: new Date('2026-02-10'),
      credentialUrl:
        'https://www.pmi.org/certifications/project-management-pmp',
      issuerLogo: 'assets/images/logos/pmi-logo.png',
      description: 'Demonstrates leadership and project management expertise.',
      shortDescription:
        'Project management leadership and methodology expertise',
      skills: ['Project Management', 'Leadership', 'Risk Management'],
      isFlipped: false,
      credentialId: 'PMP-2023-778899',
      status: 'active',
    },
  ];

  constructor() {
    this.updateCertificationStatus();
  }

  flipCard(cert: Certification): void {
    // Close other flipped cards
    this.certifications.forEach((c) => {
      if (c.id !== cert.id) {
        c.isFlipped = false;
      }
    });

    cert.isFlipped = !cert.isFlipped;
  }

  onCardHover(cert: Certification, isHovering: boolean): void {
    // Add subtle hover effects if needed
  }

  getShortTitle(title: string): string {
    const words = title.split(' ');
    if (words.length <= 2) return title;
    return words.slice(0, 2).join(' ') + (words.length > 2 ? '...' : '');
  }

  getCertificationType(title: string): string {
    if (title.toLowerCase().includes('aws')) return 'Cloud';
    if (title.toLowerCase().includes('azure')) return 'Cloud';
    if (title.toLowerCase().includes('angular')) return 'Frontend';
    if (title.toLowerCase().includes('kubernetes')) return 'DevOps';
    if (title.toLowerCase().includes('security')) return 'Security';
    if (title.toLowerCase().includes('pmp')) return 'Management';
    return 'Certification';
  }

  getStatusIcon(status: string): string {
    switch (status) {
      case 'active':
        return 'fas fa-check-circle';
      case 'expiring-soon':
        return 'fas fa-exclamation-triangle';
      case 'expired':
        return 'fas fa-times-circle';
      default:
        return 'fas fa-certificate';
    }
  }

  getActiveCerts(): Certification[] {
    return this.certifications.filter((cert) => cert.status === 'active');
  }

  getExpiringSoonCerts(): Certification[] {
    return this.certifications.filter(
      (cert) => cert.status === 'expiring-soon'
    );
  }

  scrollCards(direction: 'prev' | 'next'): void {
    const container = document.querySelector('.cards-grid') as HTMLElement;
    if (container) {
      const scrollAmount = 280; // Card width + gap
      const currentScroll = container.scrollLeft;
      const newScroll =
        direction === 'next'
          ? currentScroll + scrollAmount
          : currentScroll - scrollAmount;

      container.scrollTo({
        left: newScroll,
        behavior: 'smooth',
      });
    }
  }

  toggleDetailsView(): void {
    this.showAllDetails = !this.showAllDetails;
  }

  private updateCertificationStatus(): void {
    const currentDate = new Date();
    const threeMonthsFromNow = new Date();
    threeMonthsFromNow.setMonth(currentDate.getMonth() + 3);

    this.certifications.forEach((cert) => {
      if (cert.expiryDate) {
        if (cert.expiryDate < currentDate) {
          cert.status = 'expired';
        } else if (cert.expiryDate < threeMonthsFromNow) {
          cert.status = 'expiring-soon';
        } else {
          cert.status = 'active';
        }
      } else {
        cert.status = 'active';
      }
    });
  }
}
