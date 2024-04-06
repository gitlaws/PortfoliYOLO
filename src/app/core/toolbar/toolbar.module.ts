import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeToggleModule } from '../../shared/common/theme-toggle/theme-toggle.module';
import { SocialLinksModule } from '../../shared/common/social-links/social-links.module';
import { ToolbarMenuModule } from '../toolbar-menu/toolbar-menu.module';
import { ToolbarComponent } from './toolbar.component';
import { CyberMenuModule } from '../cyber-menu/cyber-menu.module';
import { CybergurModule } from '../cybergur/cybergur.module';
import { CubeModule } from './cube/cube.module';

@NgModule({
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent],
  imports: [
    CommonModule,
    ThemeToggleModule,
    SocialLinksModule,
    ToolbarMenuModule,
    CyberMenuModule,
    CybergurModule,
    CubeModule,
  ],
})
export class ToolbarModule {}
