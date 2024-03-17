import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './core/toolbar/toolbar.component';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [CommonModule],
  exports: [ToolbarComponent], // add this line if you want to use it in other modules
})
export class AppModule {}
