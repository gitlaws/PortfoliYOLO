import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeToggleModule } from '../../shared/common/theme-toggle/theme-toggle.module';
import { SocialLinksModule } from '../../shared/common/social-links/social-links.module';
import { CyberMenuComponent } from './cyber-menu.component';
import { SharedModule } from '../../shared/shared.module';
@NgModule({
  declarations: [CyberMenuComponent],
  imports: [CommonModule, SharedModule, ThemeToggleModule, SocialLinksModule],
  exports: [CyberMenuComponent],
})
export class CyberMenuModule {}
