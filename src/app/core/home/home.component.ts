import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThemeService } from '../../shared/services/theme/theme.service';
import { Theme } from '../../shared/models/theme.enum';
import { TypewriterComponent } from './typewriter/typewriter.component';
import { ParticlesBackgroundComponent } from './particles-background/particles-background.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TypewriterComponent, ParticlesBackgroundComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
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
      this.theme = theme === Theme.Light ? 'light' : 'dark';
    });
  }
}
