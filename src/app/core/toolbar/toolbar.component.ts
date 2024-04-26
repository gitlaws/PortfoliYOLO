import { Component } from '@angular/core';
import { ThemeToggleModule } from '../../shared/common/theme-toggle/theme-toggle.module';
import { SocialLinksModule } from '../../shared/common/social-links/social-links.module';
import { CyberMenuModule } from '../cyber-menu/cyber-menu.module';
import { CubeLogoModule } from './cube-logo/cube-logo.module';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  imports: [
    ThemeToggleModule,
    SocialLinksModule,
    CyberMenuModule,
    CubeLogoModule,
  ],
})
export class ToolbarComponent {}
