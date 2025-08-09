import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../../shared/services/theme/theme.service';
import { Theme } from '../../../shared/models/theme.enum';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule], // Required for ngClass
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit, OnDestroy {
  theme!: 'light' | 'dark';
  private themeSubscription?: Subscription;

  constructor(private themeService: ThemeService) {}

  openLink(event: MouseEvent, url: string): void {
    event.preventDefault();
    window.open(url, '_blank', 'noopener');
  }

  ngOnInit(): void {
    this.themeSubscription = this.themeService.currentTheme.subscribe(
      (theme) => {
        this.theme = theme === Theme.Light ? 'light' : 'dark';
      }
    );
  }

  ngOnDestroy(): void {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }
}
