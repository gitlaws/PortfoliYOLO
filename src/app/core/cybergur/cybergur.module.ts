import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CybergurComponent } from './cybergur.component';
import { ThemeToggleModule } from '../../shared/common/theme-toggle/theme-toggle.module';
import { SocialLinksModule } from '../../shared/common/social-links/social-links.module';

@NgModule({
  declarations: [CybergurComponent],
  exports: [CybergurComponent],
  imports: [CommonModule, ThemeToggleModule, SocialLinksModule],
})
export class CybergurModule {}
