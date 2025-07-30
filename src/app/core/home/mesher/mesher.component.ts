import {
  Component,
  OnInit,
  OnDestroy,
  HostBinding,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../shared/services/theme/theme.service';
import { Theme } from '../../../shared/models/theme.enum';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mesher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mesher.component.html',
  styleUrl: './mesher.component.scss',
})
export class MesherComponent implements OnInit, OnDestroy {
  private themeService = inject(ThemeService);

  prefersReducedMotion = false;
  private themeSubscription?: Subscription;

  @HostBinding('attr.aria-hidden') ariaHidden = 'true';

  // This works with [ngClass]="theme" in your template
  theme: string = 'dark';

  ngOnInit() {
    // Use currentTheme getter from your service (not theme$)
    this.themeSubscription = this.themeService.currentTheme.subscribe(
      (themeValue) => {
        // Convert Theme enum to string for CSS classes
        this.theme = themeValue === Theme.Light ? 'light' : 'dark';
      }
    );

    // Check for reduced motion preference
    this.prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
  }

  ngOnDestroy() {
    this.themeSubscription?.unsubscribe();
  }
}
