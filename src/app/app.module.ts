import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './core/toolbar/toolbar.component';
import { MainNavModule } from './core/main-nav/main-nav.module';

@NgModule({
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent],
  imports: [CommonModule, MainNavModule],
})
export class AppModule {}
