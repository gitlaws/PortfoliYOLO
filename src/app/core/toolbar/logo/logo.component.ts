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
  theme: string = 'dark'; // This will be 'light' or 'dark'
  private themeSubscription?: Subscription;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeSubscription = this.themeService.currentTheme.subscribe(
      (currentTheme: Theme) => {
        this.theme = currentTheme === Theme.Light ? 'light' : 'dark';
      }
    );
  }

  ngOnDestroy(): void {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }
}
