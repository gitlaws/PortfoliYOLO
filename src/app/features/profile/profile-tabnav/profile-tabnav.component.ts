import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-profile-tabnav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-tabnav.component.html',
  styleUrl: './profile-tabnav.component.scss',
})
export class ProfileTabnavComponent {
  activeTab: any;
  activeSlide = 1;

  ngOnInit() {
    this.activeTab = 'tab1';
  }

  selectSlide(slideNumber: number) {
    this.activeSlide = slideNumber;
    // Add your logic here to change the slide content
  }
}
