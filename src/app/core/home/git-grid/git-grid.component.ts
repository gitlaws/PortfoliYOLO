import { Component, Input } from '@angular/core';
import { GitSquareComponent } from '../git-square/git-square.component';

@Component({
  selector: 'app-git-grid',
  standalone: true,
  imports: [GitSquareComponent],
  templateUrl: './git-grid.component.html',
  styleUrl: './git-grid.component.scss',
})
export class GitGridComponent {
  @Input() contributions: number[] = [];
  gridSize = 7;
  colorMap: any;
  squareSize: any;

  get rows() {
    // Calculate rows based on contributions length and grid size
  }
}
