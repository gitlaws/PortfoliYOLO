import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialLinksModule } from './shared/common/social-links/social-links.module';
import { ThemeToggleModule } from './shared/common/theme-toggle/theme-toggle.module';
import { ToolbarMenuModule } from './core/toolbar-menu/toolbar-menu.module';
import { ToolbarModule } from './core/toolbar/toolbar.module';
import { ProfileModule } from './features/profile/profile.module';
import { ProjectsModule } from './features/projects/projects.module';
import { CyberMenuModule } from './core/cyber-menu/cyber-menu.module';
import { CybergurComponent } from './core/cybergur/cybergur.component';
import { CybergurModule } from './core/cybergur/cybergur.module';

@NgModule({
  declarations: [],
  exports: [],
  imports: [
    CommonModule,
    SocialLinksModule,
    ThemeToggleModule,
    ToolbarMenuModule,
    ProfileModule,
    ProjectsModule,
    CyberMenuModule,
  ],
})
export class AppModule {}
