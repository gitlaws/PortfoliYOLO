import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './core/toolbar/toolbar.component';
import { MainNavModule } from './core/main-nav/main-nav.module';
import { SocialLinksModule } from './shared/common/social-links/social-links.module';
import { ThemeToggleModule } from './shared/common/theme-toggle/theme-toggle.module';
import { ToolbarMenuModule } from './core/toolbar-menu/toolbar-menu.module';

@NgModule({
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent],
  imports: [
    CommonModule,
    MainNavModule,
    SocialLinksModule,
    ThemeToggleModule,
    ToolbarMenuModule,
  ],
})
export class AppModule {}
