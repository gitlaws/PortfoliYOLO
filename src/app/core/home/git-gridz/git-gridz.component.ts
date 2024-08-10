import { Component } from '@angular/core';

@Component({
  selector: 'app-git-gridz',
  standalone: true,
  imports: [],
  templateUrl: './git-gridz.component.html',
  styleUrls: ['./git-gridz.component.scss'],
})
export class GitGridzComponent {
  contributions: { level: number }[] = [];

  constructor() {
    this.generateContributions();
  }

  generateContributions(): void {
    for (let i = 1; i < 365; i++) {
      const level = Math.floor(Math.random() * 4); // Adjusted to match the levels in the CSS
      this.contributions.push({ level });
    }
  }
}