import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-cybergur',
  templateUrl: './cybergur.component.html',
  styleUrl: './cybergur.component.scss',
})
export class CybergurComponent {
  isMenuOpen = false;
  menuAnimation = '';

  toggleMenu() {
    if (this.isMenuOpen) {
      this.menuAnimation = 'fadeInUp';
    } else {
      this.isMenuOpen = true;
      this.menuAnimation = 'fadeInDown';
    }
  }
}
