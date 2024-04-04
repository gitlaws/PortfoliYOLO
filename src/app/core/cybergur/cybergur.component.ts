import { Component } from '@angular/core';

@Component({
  selector: 'app-cybergur',
  templateUrl: './cybergur.component.html',
  styleUrl: './cybergur.component.scss',
})
export class CybergurComponent {
  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
