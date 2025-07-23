import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule], // Add this import
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit {
  theme: string = 'light'; // Add this property

  constructor() {}

  ngOnInit(): void {
    // Initialize theme logic here
  }
}
