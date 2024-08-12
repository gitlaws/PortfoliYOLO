import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Theme } from '../../models/theme.enum';
import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-social-links',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss'],
})
export class SocialLinksComponent {
  theme!: 'light' | 'dark';
  isDarkMode: boolean = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.currentTheme.subscribe((theme) => {
      this.theme = theme === Theme.Light ? 'light' : 'dark';
      this.isDarkMode = this.theme === 'dark';
    });
  }
}
