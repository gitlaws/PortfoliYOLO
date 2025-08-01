import { Component, OnInit } from '@angular/core';
import { Theme } from '../../shared/models/theme.enum';
import { ThemeService } from '../../shared/services/theme/theme.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { InterestsComponent } from './interests/interests.component';
import { CertificationsComponent } from './certifications/certifications.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, InterestsComponent, CertificationsComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  theme!: 'light' | 'dark';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.currentTheme.subscribe((theme) => {
      this.theme = theme === Theme.Light ? 'light' : 'dark';
    });
  }
}
