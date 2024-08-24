import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
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

  @ViewChild('footerElement') footerElement!: ElementRef;

  constructor(
    private themeService: ThemeService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.themeService.currentTheme.subscribe((theme) => {
      this.theme = theme === Theme.Light ? 'light' : 'dark';
    });

    this.addScrollEventListener();
  }

  openLink(event: MouseEvent, url: string): void {
    event.preventDefault();
    window.open(url, '_blank');
  }

  private addScrollEventListener(): void {
    let lastScrollTop = 0;

    this.renderer.listen('window', 'scroll', () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // User is scrolling down
        this.renderer.addClass(this.footerElement.nativeElement, 'collapsed');
        this.renderer.removeClass(this.footerElement.nativeElement, 'expanded');
      } else {
        // User is scrolling up
        this.renderer.addClass(this.footerElement.nativeElement, 'expanded');
        this.renderer.removeClass(
          this.footerElement.nativeElement,
          'collapsed'
        );
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    });
  }
}
