import { Component } from '@angular/core';
import { Theme } from '../../shared/models/theme.enum';
import { ThemeService } from '../../shared/services/theme/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-compensation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './compensation.component.html',
  styleUrl: './compensation.component.scss',
})
export class CompensationComponent {
  theme!: 'light' | 'dark';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.currentTheme.subscribe((theme) => {
      this.theme = theme === Theme.Light ? 'light' : 'dark';
    });
  }
}
