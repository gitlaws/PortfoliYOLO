import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ToolbarModule } from './core/toolbar/toolbar.module';
import { AppComponent } from './app.component';
import { FooterModule } from './core/footer/footer.module';

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ToolbarModule, FooterModule],
})
export class AppModule {}
