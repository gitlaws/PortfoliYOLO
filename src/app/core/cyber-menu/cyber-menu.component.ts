import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cyber-menu',
  templateUrl: './cyber-menu.component.html',
  styleUrl: './cyber-menu.component.scss',
})
export class CyberMenuComponent {
  menuOpen = false;
  menuItems = ['Projects', 'Profile', 'Theme Button', 'Social Links'];

  @Output() select = new EventEmitter<string>();

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  selectMenuItem(item: string) {
    this.select.emit(item);
    this.closeMenu();
  }
}
