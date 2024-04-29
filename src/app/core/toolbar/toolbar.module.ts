import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeToggleModule } from '../../shared/common/theme-toggle/theme-toggle.module';
import { SocialLinksModule } from '../../shared/common/social-links/social-links.module';
import { CyberMenuModule } from '../cyber-menu/cyber-menu.module';
import { CubeLogoComponent } from './cube-logo/cube-logo.component';
import { ToolbarComponent } from './toolbar.component';

@NgModule({
  declarations: [CubeLogoComponent],
  imports: [
    CommonModule,
    ThemeToggleModule,
    SocialLinksModule,
    CyberMenuModule,
    ToolbarComponent,
  ],
  exports: [ToolbarComponent],
})
export class ToolbarModule {}
