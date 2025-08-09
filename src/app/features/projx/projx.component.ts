import { Component, OnInit } from '@angular/core';
import { Theme } from '../../shared/models/theme.enum';
import { ThemeService } from '../../shared/services/theme/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projx',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projx.component.html',
  styleUrl: './projx.component.scss',
})
export class ProjxComponent implements OnInit {
  theme!: 'light' | 'dark';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.currentTheme.subscribe((theme) => {
      this.theme = theme === Theme.Light ? 'light' : 'dark';
    });
  }
}
