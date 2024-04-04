// cyber-menu.component.ts
import { Component, ElementRef, Output, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-cyber-menu',
  templateUrl: './cyber-menu.component.html',
  styleUrls: ['./cyber-menu.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class CyberMenuComponent {
  menuOpen = false;
  menuItems = ['Projects', 'Profile', 'Theme Button', 'Social Links'];
  clickedItem: string | null = null;

  @Output() select = new EventEmitter<string>();

  constructor(private eRef: ElementRef) {} // Here is where you add the constructor

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

  setClickedItem(item: string) {
    this.clickedItem = item;
  }
}
