import { Component } from '@angular/core';

@Component({
  selector: 'app-cyber-menu',
  templateUrl: './cyber-menu.component.html',
  styleUrl: './cyber-menu.component.scss',
})
export class CyberMenuComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  menuItems: string[] = ['Projects', 'Profile', 'Theme Button', 'Social Links'];

  selectMenuItem(item: string) {
    console.log('Selected Menu Item:', item);
    // Add your logic for handling the selected menu item here
  }
}
