// cyber-menu.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CyberMenuComponent } from './cyber-menu.component';
import { ThemeToggleModule } from '../../shared/common/theme-toggle/theme-toggle.module';
import { SocialLinksModule } from '../../shared/common/social-links/social-links.module';

@NgModule({
  declarations: [CyberMenuComponent],
  exports: [CyberMenuComponent],
  imports: [CommonModule, ThemeToggleModule, SocialLinksModule],
})
export class CyberMenuModule {}
