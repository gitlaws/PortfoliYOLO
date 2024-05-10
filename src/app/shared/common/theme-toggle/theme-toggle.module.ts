import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';
import { ThemeToggleComponent } from './theme-toggle.component'; // import the component

@NgModule({
  declarations: [ThemeToggleComponent], // declare the component
  imports: [CommonModule, SharedModule],
  exports: [ThemeToggleComponent], // export the component if it's used in other modules
})
export class ThemeToggleModule {}
