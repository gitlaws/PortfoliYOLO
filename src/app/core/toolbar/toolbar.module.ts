import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeToggleModule } from '../../shared/common/theme-toggle/theme-toggle.module';
import { SocialLinksModule } from '../../shared/common/social-links/social-links.module';
import { ToolbarMenuModule } from '../toolbar-menu/toolbar-menu.module';
import { ToolbarComponent } from './toolbar.component';
import { CybergurComponent } from '../cybergur/cybergur.component';
import { CyberMenuComponent } from '../cyber-menu/cyber-menu.component';

@NgModule({
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent],
  imports: [
    CommonModule,
    ThemeToggleModule,
    SocialLinksModule,
    ToolbarMenuModule,
    CybergurComponent,
    CyberMenuComponent,
  ],
})
export class ToolbarModule {}
