import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './core/toolbar/toolbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ProfileTabnavComponent } from './features/profile-tabnav/profile-tabnav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    CommonModule,
    RouterOutlet,
    ToolbarComponent,
    FooterComponent,
    ProjectsComponent,
    ProfileTabnavComponent,
  ],
})
export class AppComponent {
  title = 'PortfoliYOLO';
}
