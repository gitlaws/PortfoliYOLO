import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarMenuComponent } from './toolbar-menu.component';
import { ThemeToggleModule } from '../../shared/common/theme-toggle/theme-toggle.module';
import { SocialLinksModule } from '../../shared/common/social-links/social-links.module';

@NgModule({
  declarations: [ToolbarMenuComponent],
  exports: [ToolbarMenuComponent],
  imports: [CommonModule, ThemeToggleModule, SocialLinksModule],
})
export class ToolbarMenuModule {}
