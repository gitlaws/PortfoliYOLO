import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Theme } from '../../../shared/models/theme.enum';
import { ThemeService } from '../../../shared/services/theme/theme.service';

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

  slides = [
    { name: 'Frontend', id: 'frontend' },
    { name: 'Backend', id: 'backend' },
    { name: 'Database', id: 'database' },
    { name: 'Cloud/DevOps', id: 'cloud' },
    { name: 'Testing', id: 'testing' },
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
}
