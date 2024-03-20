import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialLinksModule } from './shared/common/social-links/social-links.module';
import { ThemeToggleModule } from './shared/common/theme-toggle/theme-toggle.module';
import { ToolbarMenuModule } from './core/toolbar-menu/toolbar-menu.module';

@NgModule({
  declarations: [],
  exports: [],
  imports: [
    CommonModule,
    SocialLinksModule,
    ThemeToggleModule,
    ToolbarMenuModule,
  ],
})
export class AppModule {}
