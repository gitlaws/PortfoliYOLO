import { Component } from '@angular/core';

@Component({
  selector: 'app-cybergur',
  templateUrl: './cybergur.component.html',
  styleUrl: './cybergur.component.scss',
})
export class CybergurComponent {
  isMenuOpen = false;
  menuItems = [
    { name: 'Projects', url: '/home' },
    { name: 'Profile', url: '/about' },
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
