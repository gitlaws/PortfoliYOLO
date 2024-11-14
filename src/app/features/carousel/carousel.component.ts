import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../profile/profile.component';
import { Theme } from '../../shared/models/theme.enum';
import { ThemeService } from '../../shared/services/theme/theme.service';
import { CompensationComponent } from '../compensation/compensation.component';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, ProfileComponent],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  currentIndex = 0;
  components = [ProfileComponent, CompensationComponent];

  nextPage() {
    this.currentIndex = (this.currentIndex + 1) % this.components.length;
  }

  prevPage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.components.length) % this.components.length;
  }

  theme!: 'light' | 'dark';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.currentTheme.subscribe((theme) => {
      this.theme = theme === Theme.Light ? 'light' : 'dark';
    });
  }
}
