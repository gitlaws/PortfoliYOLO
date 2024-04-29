import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './core/footer/footer.module';
import { ProjectsModule } from './features/projects/projects.module';
import { ProfileTabnavModule } from './features/profile-tabnav/profile-tabnav.module';
import { ToolbarModule } from './core/toolbar/toolbar.module';

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FooterModule,
    ProjectsModule,
    ProfileTabnavModule,
    ToolbarModule,
  ],
})
export class AppModule {}
