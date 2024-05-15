import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Component, OnInit, HostListener } from '@angular/core';
import { ThemeToggleComponent } from '../../shared/common/theme-toggle/theme-toggle.component';
import { SocialLinksComponent } from '../../shared/common/social-links/social-links.component';

@Component({
  selector: 'app-cyber-menu',
  standalone: true,
  templateUrl: './cyber-menu.component.html',
  styleUrls: ['./cyber-menu.component.scss'],
  imports: [
    CommonModule,
    RouterLink,
    ThemeToggleComponent,
    SocialLinksComponent,
  ],
})
export class CyberMenuComponent implements OnInit {
  isMenuOpen = false;
  menuItems = [
    { name: 'Projects', url: '/home' },
    { name: 'Profile', url: '/about' },
  ];

  // toggleMenu() {
  //   this.isMenuOpen = !this.isMenuOpen;
  // }

  toggleMenu(event: MouseEvent) {
    event.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('document:click')
  closeMenu() {
    this.isMenuOpen = false;
  }

  constructor() {}

  ngOnInit(): void {
    // Initialization code goes here
  }
}
