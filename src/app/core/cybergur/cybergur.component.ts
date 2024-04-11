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
    this.isMenuOpen = !this.isMenuOpen;
    this.menuAnimation = this.isMenuOpen ? 'fadeInDown' : 'fadeInUp';
  }

  @HostListener('animationend', ['$event'])
  onAnimationEnd(event: AnimationEvent) {
    if (event.animationName === 'fadeInUp') {
      this.isMenuOpen = false;
    }
  }
}
