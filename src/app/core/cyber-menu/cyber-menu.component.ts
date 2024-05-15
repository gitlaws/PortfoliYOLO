import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { ThemeToggleComponent } from '../../shared/common/theme-toggle/theme-toggle.component';
import { SocialLinksComponent } from '../../shared/common/social-links/social-links.component';

@Component({
  selector: 'app-cyber-menu',
  standalone: true,
  templateUrl: './cyber-menu.component.html',
  styleUrls: ['./cyber-menu.component.scss'],
  imports: [
    CommonModule,
    RouterLink,
    ThemeToggleComponent,
    SocialLinksComponent,
  ],
})
export class CyberMenuComponent implements OnInit {
  isMenuOpen = false;
  menuItems = [
    { name: 'Projects', url: '/home' },
    { name: 'Profile', url: '/about' },
  ];

  // toggleMenu() {
  //   this.isMenuOpen = !this.isMenuOpen;
  // }

  // toggleMenu(event: MouseEvent) {
  //   event.stopPropagation();
  //   this.isMenuOpen = !this.isMenuOpen;
  // }
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    // Add a click event listener to the document
    document.addEventListener('click', this.documentClickHandler.bind(this));
  }

  ngOnDestroy(): void {
    // Remove the click event listener from the document
    document.removeEventListener('click', this.documentClickHandler.bind(this));
  }

  documentClickHandler(event: MouseEvent) {
    // Check if the click event is coming from within the dropdown content
    if (!this.elementRef.nativeElement.contains(event.target)) {
      // If not, close the dropdown
      this.isMenuOpen = false;
    }
  }

  toggleMenu(event: MouseEvent) {
    event.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
  }
}
