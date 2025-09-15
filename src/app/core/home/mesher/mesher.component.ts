import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ThemeType = 'light' | 'dark' | 'neumorphic';

@Component({
  selector: 'app-mesher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mesher.component.html',
  styleUrls: ['./mesher.component.scss'],
})
export class MesherComponent {
  theme: ThemeType = 'neumorphic';
}
