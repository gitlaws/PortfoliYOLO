import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { ThemeToggleModule } from '../../shared/common/theme-toggle/theme-toggle.module';
import { SocialLinksModule } from '../../shared/common/social-links/social-links.module';
import { ToolbarMenuModule } from '../toolbar-menu/toolbar-menu.module';

@NgModule({
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent],
  imports: [
    CommonModule,
    ThemeToggleModule,
    SocialLinksModule,
    ToolbarMenuModule,
  ],
})
export class ToolbarModule {}
