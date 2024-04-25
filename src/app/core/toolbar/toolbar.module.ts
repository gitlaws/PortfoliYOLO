import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeToggleModule } from '../../shared/common/theme-toggle/theme-toggle.module';
import { SocialLinksModule } from '../../shared/common/social-links/social-links.module';
import { ToolbarMenuModule } from '../toolbar-menu/toolbar-menu.module';
import { CyberMenuModule } from '../cyber-menu/cyber-menu.module';
import { CubeLogoComponent } from './cube-logo/cube-logo.component';
import { ToolbarComponent } from './toolbar.component';

@NgModule({
  declarations: [CubeLogoComponent],
  imports: [
    CommonModule,
    ThemeToggleModule,
    SocialLinksModule,
    ToolbarMenuModule,
    CyberMenuModule,
    ToolbarComponent,
  ],
  exports: [],
})
export class ToolbarModule {}
