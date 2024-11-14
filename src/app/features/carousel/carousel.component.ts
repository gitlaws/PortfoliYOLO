import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../profile/profile.component';
import { CompensationComponent } from '../compensation/compensation.component';
import { Theme } from '../../shared/models/theme.enum';
import { ThemeService } from '../../shared/services/theme/theme.service';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, ProfileComponent, CompensationComponent],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  currentIndex = 0;
  components = [ProfileComponent, CompensationComponent];
  theme!: 'light' | 'dark';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.currentTheme.subscribe((theme) => {
      this.theme = theme === Theme.Light ? 'light' : 'dark';
    });
  }

  nextPage() {
    this.currentIndex = (this.currentIndex + 1) % this.components.length;
  }

  prevPage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.components.length) % this.components.length;
  }
}
