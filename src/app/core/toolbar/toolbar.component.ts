import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CyberMenuModule } from '../cyber-menu/cyber-menu.module';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  imports: [SharedModule, CyberMenuModule],
})
export class ToolbarComponent {}
