import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './core/toolbar/toolbar.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [CommonModule, ToolbarComponent],
})
export class AppModule {}
