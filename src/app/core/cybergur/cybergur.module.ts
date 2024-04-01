import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeToggleModule } from '../../shared/common/theme-toggle/theme-toggle.module';
import { SocialLinksModule } from '../../shared/common/social-links/social-links.module';
import { CybergurComponent } from './cybergur.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeToggleModule,
    SocialLinksModule,
    CybergurComponent,
  ],
})
export class ToolbarMenuModule {}
