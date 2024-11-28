import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Theme } from '../../shared/models/theme.enum';
import { ThemeService } from '../../shared/services/theme/theme.service';

@Component({
  selector: 'app-mock',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mock.component.html',
  styleUrl: './mock.component.scss',
})
export class MockComponent {
  theme!: 'light' | 'dark';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.currentTheme.subscribe((theme) => {
      this.theme = theme === Theme.Light ? 'light' : 'dark';
    });
  }
}
