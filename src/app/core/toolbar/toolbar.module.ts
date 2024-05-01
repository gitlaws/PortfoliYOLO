import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ToolbarComponent, SharedModule],
  exports: [ToolbarComponent],
})
export class ToolbarModule {}
