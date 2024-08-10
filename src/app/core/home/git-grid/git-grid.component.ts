import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-git-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './git-grid.component.html',
  styleUrls: ['./git-grid.component.scss'],
})
export class GitGridComponent {
  contributions: { level: number }[] = [];

  constructor() {
    this.generateContributions();
  }

  generateContributions(): void {
    this.contributions = Array.from({ length: 365 }, () => ({
      level: Math.floor(Math.random() * 4), // Random level between 0 and 3
    }));
  }
}