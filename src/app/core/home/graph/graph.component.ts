import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent implements OnInit {
  @Input() data: number[][] = [];

  months: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  contributionData: number[][] = [];

  ngOnInit(): void {
    this.generateContributionData();
  }

  generateContributionData(): void {
    if (this.data.length) {
      this.contributionData = this.data;
    } else {
      for (let i = 0; i < 53; i++) {
        const week = [];
        for (let j = 0; j < 7; j++) {
          week.push(Math.floor(Math.random() * 5)); // Random contribution level between 0 and 4
        }
        this.contributionData.push(week);
      }
    }
  }

  getSquareClass(day: number): string {
    const level = day % 7; // Map day to a level between 0 and 6
    return `level-${level}`;
  }
}
