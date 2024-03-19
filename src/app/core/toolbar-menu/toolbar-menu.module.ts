import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksModule } from '../shared/common/links/links.module'; // corrected path
import { ToolbarMenuComponent } from './toolbar-menu.component';

@NgModule({
  declarations: [ToolbarMenuComponent],
  exports: [ToolbarMenuComponent],
  imports: [CommonModule, LinksModule],
})
export class ToolbarMenuModule {}
