import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
import { Theme } from '../../shared/models/theme.enum';
import { ThemeService } from '../../shared/services/theme/theme.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  theme!: 'light' | 'dark';
  isDarkMode: boolean = false;
  isFooterHidden: boolean = false; // Property to track footer visibility
  threshold: number = 100; // Scroll threshold to hide the footer

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.currentTheme.subscribe((theme) => {
      this.theme = theme === Theme.Light ? 'light' : 'dark';
    });
  }

  // Listen for scroll events on the window
  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    // Check scroll position and update isFooterHidden
    if (window.scrollY > this.threshold) {
      this.isFooterHidden = true;
    } else {
      this.isFooterHidden = false;
    }
  }

  openLink(event: MouseEvent, url: string): void {
    event.preventDefault();
    window.open(url, '_blank');
  }
}
