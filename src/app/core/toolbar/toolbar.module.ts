import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { LinksModule } from '../../shared/common/links/links.module';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [CommonModule, LinksModule],
})
export class ToolbarModule {}
