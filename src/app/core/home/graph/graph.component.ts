import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent implements OnInit {
  squares: { level: number }[] = [];

  ngOnInit(): void {
    // Generate squares data
    for (let i = 1; i < 365; i++) {
      this.squares.push({ level: Math.floor(Math.random() * 3) });
    }
  }
}
