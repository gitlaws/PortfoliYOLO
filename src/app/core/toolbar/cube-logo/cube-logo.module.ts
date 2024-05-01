import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CubeLogoComponent } from './cube-logo.component';

@NgModule({
  imports: [CommonModule, CubeLogoComponent],
  exports: [CubeLogoComponent],
})
export class CubeLogoModule {}
