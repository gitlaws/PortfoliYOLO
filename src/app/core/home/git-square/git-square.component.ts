import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-git-square',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './git-square.component.html',
  styleUrls: ['./git-square.component.scss'],
  animations: [
    trigger('colorChange', [
      state('inactive', style({ backgroundColor: 'lightgray' })),
      state('active', style({ backgroundColor: 'green' })),
      transition('inactive => active', animate('500ms')),
      transition('active => inactive', animate('500ms')),
    ]),
  ],
})
export class GitSquareComponent {
  @Input() level: number = 0;
  @Input() colorMap: any = {};

  get squareColor() {
    return this.colorMap[this.level] || 'lightgray';
  }
}
