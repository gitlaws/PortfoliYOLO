import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Theme } from '../../../shared/models/theme.enum';
import { ThemeService } from '../../../shared/services/theme/theme.service';

@Component({
  selector: 'app-left-column',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './left-column.component.html',
  styleUrl: './left-column.component.scss',
})
export class LeftColumnComponent {
  theme!: 'light' | 'dark';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.currentTheme.subscribe((theme) => {
      this.theme = theme === Theme.Light ? 'light' : 'dark';
    });
  }
}
