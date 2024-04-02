// cyber-menu.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CyberMenuComponent } from './cyber-menu.component';

@NgModule({
  declarations: [CyberMenuComponent],
  imports: [CommonModule],
  exports: [CyberMenuComponent], // Import the module before exporting it
})
export class CyberMenuModule {}
