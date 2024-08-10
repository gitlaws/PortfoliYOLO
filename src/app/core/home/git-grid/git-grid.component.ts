import { Component, Input } from '@angular/core';
import { GitSquareComponent } from '../git-square/git-square.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-git-grid',
  standalone: true,
  imports: [CommonModule, GitSquareComponent],
  templateUrl: './git-grid.component.html',
  styleUrl: './git-grid.component.scss',
})
export class GitGridComponent {
  @Input() contributions: number[] = [];
  gridSize = 7;
  colorMap: any;
  squareSize: any;

  get rows() {
    return Math.ceil(this.contributions.length / this.gridSize);
  }
}
