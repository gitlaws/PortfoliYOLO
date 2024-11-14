import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../profile/profile.component';
import { CompensationComponent } from '../compensation/compensation.component';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, ProfileComponent, CompensationComponent],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  currentIndex = 0;
  components = [ProfileComponent, CompensationComponent];
  theme = 'light'; // or 'dark', based on your theme logic

  nextPage() {
    this.currentIndex = (this.currentIndex + 1) % this.components.length;
  }

  prevPage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.components.length) % this.components.length;
  }
}
