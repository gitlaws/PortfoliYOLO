import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarMenuModule } from './core/toolbar-menu/toolbar-menu.module';
import { ToolbarModule } from './core/toolbar/toolbar.module';
import { LinksModule } from './shared/common/links/links.module';
import { ThemeToggleModule } from './shared/common/theme-toggle/theme-toggle.module';
import { SocialLinksModule } from './shared/common/social-links/social-links.module';

@NgModule({
  imports: [
    CommonModule,
    ToolbarModule,
    LinksModule,
    ThemeToggleModule,
    SocialLinksModule,
    ToolbarMenuModule,
  ],
})
export class AppModule {}
