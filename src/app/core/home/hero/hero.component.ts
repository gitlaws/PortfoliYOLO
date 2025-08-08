import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { ThemeService } from '../../../shared/services/theme/theme.service';
import { Theme } from '../../../shared/models/theme.enum';
import { CommonModule } from '@angular/common';
import { TypewriterComponent } from '../typewriter/typewriter.component';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';
import { CubeLogoComponent } from '../../toolbar/cube-logo/cube-logo.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TypewriterComponent, RouterLink, CubeLogoComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit, OnDestroy {
  private themeService = inject(ThemeService);
  private themeSubscription?: Subscription;

  title!: string;

  // This property works with [ngClass]="theme"
  theme: string = 'dark';

  ngOnInit() {
    // Subscribe to theme changes
    this.themeSubscription = this.themeService.currentTheme.subscribe(
      (themeValue) => {
        // Convert Theme enum to string for CSS classes
        this.theme = themeValue === Theme.Light ? 'light' : 'dark';
      }
    );
  }

  ngOnDestroy() {
    this.themeSubscription?.unsubscribe();
  }
}
