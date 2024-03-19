import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialLinksModule } from './shared/common/social-links/social-links.module';
import { ThemeToggleModule } from './shared/common/theme-toggle/theme-toggle.module';
import { ToolbarMenuModule } from './core/toolbar-menu/toolbar-menu.module';
import { LinksModule } from './shared/common/links/links.module';

@NgModule({
  exports: [],
  imports: [
    CommonModule,
    SocialLinksModule,
    ThemeToggleModule,
    ToolbarMenuModule,
    LinksModule,
  ],
})
export class AppModule {}
