import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './core/toolbar/toolbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ProfileComponent } from './features/profile/profile.component';
import { Theme } from './shared/models/theme.enum';
import { ThemeService } from './shared/services/theme/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    CommonModule,
    RouterOutlet,
    ToolbarComponent,
    FooterComponent,
    ProjectsComponent,
    ProfileComponent,
  ],
})
export class AppComponent {
  title = 'PortfoliYOLO';
  theme!: 'light' | 'dark';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.currentTheme.subscribe((theme) => {
      this.theme = theme === Theme.Light ? 'light' : 'dark';
    });
  }
}
