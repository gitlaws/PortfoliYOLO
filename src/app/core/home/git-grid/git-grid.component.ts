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
  contributions: { level: number }[] = [];

  constructor() {
    this.generateContributions();
  }

  generateContributions(): void {
    for (let i = 1; i <= 365; i++) {
      const level = Math.floor(Math.random() * 3);
      this.contributions.push({ level });
    }
  }
}
