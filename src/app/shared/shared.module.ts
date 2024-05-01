import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlecasePipe } from './pipes/titlecase.pipe';
import { CubeLogoComponent } from '../core/toolbar/cube-logo/cube-logo.component';
import { ThemeToggleComponent } from './common/theme-toggle/theme-toggle.component';
import { SocialLinksComponent } from './common/social-links/social-links.component';

@NgModule({
  declarations: [TitlecasePipe],
  imports: [
    CommonModule,
    CubeLogoComponent,
    ThemeToggleComponent,
    SocialLinksComponent,
  ],
  exports: [
    CommonModule,
    TitlecasePipe,
    CubeLogoComponent,
    ThemeToggleComponent,
    SocialLinksComponent,
  ],
})
export class SharedModule {}
