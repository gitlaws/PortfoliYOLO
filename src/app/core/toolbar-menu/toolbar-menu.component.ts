import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar-menu',
  templateUrl: './toolbar-menu.component.html',
  styleUrl: './toolbar-menu.component.scss',
})
export class ToolbarMenuComponent {
  isMenuOpen = false;
  menuItems = [
    { name: 'Projects', url: '/home' },
    { name: 'Profile', url: '/about' },
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
