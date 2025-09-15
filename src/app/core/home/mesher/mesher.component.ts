import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

export type ThemeType = 'light' | 'dark';

@Component({
  selector: 'app-mesher',
  templateUrl: './mesher.component.html',
  styleUrls: ['./mesher.component.scss'],
  standalone: true,
  imports: [NgClass],
})
export class MesherComponent {
  @Input() theme: ThemeType = 'dark';

  constructor() {}
}
