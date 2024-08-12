import { Component, OnInit } from '@angular/core';
import { Theme } from '../../shared/models/theme.enum';
import { ThemeService } from '../../shared/services/theme/theme.service';
import { StorageService } from '../../shared/services/theme/storage.service';
import { CubeLogoComponent } from './cube-logo/cube-logo.component';
import { CyberMenuComponent } from '../cyber-menu/cyber-menu.component';
import { ThemeToggleComponent } from '../../shared/common/theme-toggle/theme-toggle.component';
import { CommonModule } from '@angular/common';
import { SocialLinksComponent } from '../../shared/common/social-links/social-links.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  imports: [
    CommonModule,
    RouterLink,
    CubeLogoComponent,
    CyberMenuComponent,
    ThemeToggleComponent,
    SocialLinksComponent,
  ],
  // providers: [ThemeService], //todo!
})
export class ToolbarComponent implements OnInit {
  theme!: 'light' | 'dark';

  openLink(event: MouseEvent, url: string): void {
    event.preventDefault();
    window.open(url, '_blank', 'noopener');
  }

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.currentTheme.subscribe((theme) => {
      this.theme = theme === Theme.Light ? 'light' : 'dark';
    });
  }
}
