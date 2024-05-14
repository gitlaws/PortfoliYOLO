import { Component } from '@angular/core';
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
})
export class ToolbarComponent {}
