import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppModule } from './app.module';
import { ToolbarModule } from './core/toolbar/toolbar.module';
import { ProfileModule } from './features/profile/profile.module';
import { ProfileTabnavComponent } from './features/profile-tabnav/profile-tabnav.component';
import { ProjectsModule } from './features/projects/projects.module';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    AppModule,
    ToolbarModule,
    ProfileModule,
    ProfileTabnavComponent,
    ProjectsModule,
  ],
})
export class AppComponent {
  title = 'PortfoliYOLO';
}
