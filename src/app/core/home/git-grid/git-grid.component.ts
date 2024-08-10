import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GitSquareComponent } from '../git-square/git-square.component';
@Component({
  selector: 'app-git-grid',
  standalone: true,
  imports: [CommonModule, GitSquareComponent],
  templateUrl: './git-grid.component.html',
  styleUrls: ['./git-grid.component.scss'],
})
export class GitGridComponent {
  rows: number[] = [0, 1, 2, 3, 4]; // Ensure this is an array
  contributions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Ensure this is an array
  gridSize: number = 5; // This can remain a number
  colorMap: any = { 1: 'red', 2: 'blue', 3: 'green', 4: 'yellow', 5: 'purple' }; // Example color map
  squareSize: number = 20; // Example square size
}
