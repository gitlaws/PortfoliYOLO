import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarModule } from './core/toolbar/toolbar.module';
import { FooterModule } from './core/footer/footer.module';
import { SharedModule } from './shared/shared.module';
import { ToolbarComponent } from './core/toolbar/toolbar.component';

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent, SharedModule],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolbarModule,
    FooterModule,
    ToolbarComponent,
  ],
})
export class AppModule {}
