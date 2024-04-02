import { Component } from '@angular/core';

@Component({
  selector: 'app-cyber-menu',
  templateUrl: './cyber-menu.component.html',
  styleUrl: './cyber-menu.component.scss',
})
export class CyberMenuComponent {
  isHovering = false;
  menuItems = ['Home', 'About', 'Services', 'Contact'];

  onHover(hovering: boolean) {
    this.isHovering = hovering;
  }

  selectMenuItem(item: string) {
    console.log(`Selected menu item: ${item}`);
    // Add additional logic here as needed
  }
}
