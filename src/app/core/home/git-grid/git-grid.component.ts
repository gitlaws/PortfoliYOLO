import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-git-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './git-grid.component.html',
  styleUrl: './git-grid.component.scss',
})
export class GitGridComponent {
  contributions: any[] = [
    // Your contribution data here
  ];
}
