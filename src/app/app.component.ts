import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppModule } from './app.module';
import { ToolbarModule } from './core/toolbar/toolbar.module';
import { ProfileModule } from './features/profile/profile.module';
import { ProfileHudComponent } from './features/profile-hud/profile-hud.component';

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
    ProfileHudComponent,
  ],
})
export class AppComponent {
  title = 'PortfoliYOLO';
}
