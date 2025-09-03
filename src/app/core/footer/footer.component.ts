import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
import { Theme } from '../../shared/models/theme.enum';
import { ThemeService } from '../../shared/services/theme/theme.service';
import { CubeLogoComponent } from '../toolbar/cube-logo/cube-logo.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, CubeLogoComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  theme!: 'light' | 'dark';
  isDarkMode: boolean = false;
  isFooterHidden: boolean = false; // Initially hidden
  scrollTimeout: any; // Timeout to hide the footer after scrolling stops
  isMouseOver: boolean = false; // Track mouse hover state

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.currentTheme.subscribe((theme) => {
      this.theme = theme === Theme.Light ? 'light' : 'dark';
    });
  }

  // Listen for scroll events on the window
  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    console.log('Scroll event detected');
    console.log('Scroll position:', window.scrollY);

    // Show the footer when scrolling
    this.isFooterHidden = false;
    console.log('Footer visible');

    // Clear the previous timeout if it exists
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }

    // Set a timeout to hide the footer after scrolling stops
    this.scrollTimeout = setTimeout(() => {
      if (!this.isMouseOver) {
        this.isFooterHidden = true;
        console.log('Footer hidden');
      }
    }, 1000); // Adjust the delay as needed
  }

  // Listen for mouse enter events on the footer
  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.isMouseOver = true;
    console.log('Mouse entered footer');
  }

  // Listen for mouse leave events on the footer
  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.isMouseOver = false;
    console.log('Mouse left footer');

    // Hide the footer after a delay when the mouse leaves
    this.scrollTimeout = setTimeout(() => {
      if (!this.isMouseOver) {
        this.isFooterHidden = true;
        console.log('Footer hidden');
      }
    }, 1000); // Adjust the delay as needed
  }

  openLink(event: MouseEvent, url: string): void {
    event.preventDefault();
    window.open(url, '_blank');
  }
}
