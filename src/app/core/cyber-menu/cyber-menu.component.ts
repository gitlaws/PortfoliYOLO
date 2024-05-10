import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cyber-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cyber-menu.component.html',
  styleUrls: ['./cyber-menu.component.scss'],
})
export class CyberMenuComponent implements OnInit {
  isMenuOpen = false;
  menuItems = [
    { name: 'Projects', url: '/home' },
    { name: 'Profile', url: '/about' },
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  constructor() {}

  ngOnInit(): void {
    // Initialization code goes here
  }
}
