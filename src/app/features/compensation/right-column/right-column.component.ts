import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Theme } from '../../../shared/models/theme.enum';
import { ThemeService } from '../../../shared/services/theme/theme.service';

@Component({
  selector: 'app-right-column',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './right-column.component.html',
  styleUrl: './right-column.component.scss',
})
export class RightColumnComponent {
  theme!: 'light' | 'dark';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.currentTheme.subscribe((theme) => {
      this.theme = theme === Theme.Light ? 'light' : 'dark';
    });
  }
}
