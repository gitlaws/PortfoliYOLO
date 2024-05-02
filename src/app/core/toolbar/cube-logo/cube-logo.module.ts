import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CubeLogoComponent } from './cube-logo.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [CommonModule, CubeLogoComponent, SharedModule],
  exports: [CubeLogoComponent],
})
export class CubeLogoModule {}
