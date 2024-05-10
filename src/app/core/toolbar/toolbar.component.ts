import { Component } from '@angular/core';
import { CubeLogoComponent } from './cube-logo/cube-logo.component';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
  imports: [CubeLogoComponent],
})
export class ToolbarComponent {}
