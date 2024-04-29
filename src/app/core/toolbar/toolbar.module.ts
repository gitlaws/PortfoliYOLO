import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { CubeLogoModule } from '../cube-logo/cube-logo.module'; // adjust the path as necessary

@NgModule({
  declarations: [ToolbarComponent],
  imports: [CommonModule, CubeLogoModule],
  exports: [ToolbarComponent],
})
export class ToolbarModule {}