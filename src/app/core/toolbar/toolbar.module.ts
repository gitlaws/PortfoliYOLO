import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeToggleModule } from '../../shared/common/theme-toggle/theme-toggle.module';
import { SocialLinksModule } from '../../shared/common/social-links/social-links.module';
import { ToolbarMenuModule } from '../toolbar-menu/toolbar-menu.module';
import { ToolbarComponent } from './toolbar.component';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    ThemeToggleModule,
    SocialLinksModule,
    ToolbarMenuModule,
  ],
  exports: [ToolbarComponent],
})
export class ToolbarModule {}
