import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { theme } from '../../../shared/models/theme.enum';
import { ThemeService } from '../../../shared/services/theme/theme.service';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule], // Add this import
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit {
  theme!: 'light' | 'dark';

  constructor() {}

  ngOnInit(): void {
    // Initialize theme logic here
  }
}
