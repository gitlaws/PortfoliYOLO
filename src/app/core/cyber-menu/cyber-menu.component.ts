import { Component } from '@angular/core';

@Component({
  selector: 'app-cyber-menu',
  templateUrl: './cyber-menu.component.html',
  styleUrl: './cyber-menu.component.scss',
})
export class CyberMenuComponent {
  isHovering: boolean = false;
  menuItems: string[] = ['Projects', 'Profile', 'Theme Button', 'Social Links'];

  onHover() {
    this.isHovering = true;
  }

  selectMenuItem(item: string) {
    console.log('Selected Menu Item:', item);
    // Add your logic for handling the selected menu item here
  }
}
