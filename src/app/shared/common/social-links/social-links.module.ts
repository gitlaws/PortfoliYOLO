import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialLinksComponent } from './social-links.component';
import { SharedModule } from '../../shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule],
  exports: [SocialLinksComponent],
})
export class SocialLinksModule {}
