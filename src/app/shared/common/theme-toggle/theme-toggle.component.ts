import { Component } from '@angular/core';
import { ThemeService } from '../../../shared/services/theme/theme.service';
import { Theme } from '../../../shared/models/theme.enum';
import { CommonModule } from '@angular/common';
import { StorageService } from '../../services/theme/storage.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
})
export class ThemeToggleComponent {
  isDarkMode!: boolean;
  isAnimated: boolean = false;
  tooltipText = '';

  constructor(
    private themeService: ThemeService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.themeService.currentTheme.subscribe((theme) => {
      this.isDarkMode = theme === Theme.Dark;
      this.updateTooltipText();
    });
  }

  toggleTheme(): void {
    const newTheme = this.isDarkMode ? Theme.Light : Theme.Dark;
    this.storageService.setItem('theme', newTheme);
    this.themeService.toggleTheme();
    this.isAnimated = true;
    setTimeout(() => {
      this.isAnimated = false;
    }, 500);
    this.updateTooltipText();
  }

  private updateTooltipText(): void {
    this.tooltipText = this.isDarkMode
      ? 'Toggle Light Mode'
      : 'Toggle Dark Mode';
  }
}
