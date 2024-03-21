import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabnavComponent } from './tabnav.component';

@NgModule({
  imports: [CommonModule, TabnavComponent],
  exports: [TabnavComponent],
})
export class TabnavModule {}
