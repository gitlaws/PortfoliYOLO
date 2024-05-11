import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ThemeToggleComponent } from '../../shared/common/theme-toggle/theme-toggle.component';
import { SocialLinksComponent } from '../../shared/common/social-links/social-links.component';

@Component({
  selector: 'app-cyber-menu',
  standalone: true,
  templateUrl: './cyber-menu.component.html',
  styleUrls: ['./cyber-menu.component.scss'],
  imports: [CommonModule, ThemeToggleComponent, SocialLinksComponent],
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
