import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarMenuComponent } from './toolbar-menu.component';
import { LinksModule } from '../../shared/common/links/links.module';

@NgModule({
  declarations: [ToolbarMenuComponent],
  exports: [ToolbarMenuComponent],
  imports: [CommonModule, LinksModule],
})
export class ToolbarMenuModule {}
