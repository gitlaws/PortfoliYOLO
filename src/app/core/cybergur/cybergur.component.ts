import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cybergur',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cybergur.component.html',
  styleUrl: './cybergur.component.scss',
})
export class CybergurComponent {
  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
