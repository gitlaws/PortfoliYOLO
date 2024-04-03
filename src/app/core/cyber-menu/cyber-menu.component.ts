import { Component, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-cyber-menu',
  templateUrl: './cyber-menu.component.html',
  styleUrl: './cyber-menu.component.scss',
  animations: [
    trigger('slideInOut', [
      state(
        'in',
        style({
          transform: 'translate3d(0, 0, 0)',
        })
      ),
      state(
        'out',
        style({
          transform: 'translate3d(100%, 0, 0)',
        })
      ),
      transition('in => out', animate('300ms ease-in-out')),
      transition('out => in', animate('300ms ease-in-out')),
    ]),
  ],
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
