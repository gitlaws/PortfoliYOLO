import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppModule } from './app.module';
import { ToolbarModule } from './core/toolbar/toolbar.module';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, AppModule, ToolbarModule],
})
export class AppComponent {
  title = 'PortfoliYOLO';
}
