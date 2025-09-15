import { Component } from '@angular/core';

export type ThemeType = 'light' | 'dark';

@Component({
  selector: 'app-mesher',
  templateUrl: './mesher.component.html',
  styleUrls: ['./mesher.component.scss'],
  standalone: true,
})
export class MesherComponent {
  constructor() {}
}
