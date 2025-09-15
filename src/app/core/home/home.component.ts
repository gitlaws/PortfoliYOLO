import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThemeService } from '../../shared/services/theme/theme.service';
import { Theme } from '../../shared/models/theme.enum';
import { HeroComponent } from './hero/hero.component';
import { MesherComponent, ThemeType } from './mesher/mesher.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgClass, HeroComponent, MesherComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  currentTheme!: ThemeType;
  title: string;
  theme!: 'light' | 'dark';

  constructor(
    private route: ActivatedRoute,
    private themeService: ThemeService
  ) {
    this.title = this.route.snapshot.data['title'];
    console.log('Navigated to Home component');
  }

  ngOnInit(): void {
    this.themeService.currentTheme.subscribe((theme) => {
      this.currentTheme = theme === Theme.Light ? 'light' : 'dark';
      this.theme = theme === Theme.Light ? 'light' : 'dark';
    });
  }

  onThemeToggle(): void {
    this.themeService.toggleTheme();
  }

  onMeshReady(): void {
    console.log('Mesh component is ready');
  }
}
