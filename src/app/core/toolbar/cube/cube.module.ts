import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CubeComponent } from './cube.component'; // Import CubeComponent

@NgModule({
  declarations: [CubeComponent],
  imports: [CommonModule],
  exports: [
    CubeComponent, // Export CubeComponent
  ],
})
export class CubeModule {}
