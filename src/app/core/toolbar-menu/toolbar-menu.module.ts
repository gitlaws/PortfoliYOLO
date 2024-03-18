import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarMenuComponent } from './toolbar-menu.component';

@NgModule({
  declarations: [ToolbarMenuComponent],
  exports: [ToolbarMenuComponent],
  imports: [CommonModule],
})
export class ToolbarMenuModule {}
