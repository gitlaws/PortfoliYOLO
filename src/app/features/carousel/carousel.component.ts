import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, ProfileComponent],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  currentIndex = 0;
  components = [ProfileComponent];

  nextPage() {
    this.currentIndex = (this.currentIndex + 1) % this.components.length;
  }

  prevPage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.components.length) % this.components.length;
  }
}
