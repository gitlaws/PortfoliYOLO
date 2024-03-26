import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCardComponent } from './profile-card/profile-card.component';
@Component({
  selector: 'app-profile-tabnav',
  standalone: true,
  templateUrl: './profile-tabnav.component.html',
  styleUrl: './profile-tabnav.component.scss',
  imports: [CommonModule, ProfileCardComponent],
})
export class ProfileTabnavComponent {
  activeTab: any;
  activeSlide = 1;
  currentPage: any;
  tabs: any;
  pages1: any;
  pages2: any;
  pages: any;

  constructor() {}

  ngOnInit() {
    this.activeTab = 'tab1';
    this.currentPage = 1; // Initialize currentPage to 1
  }

  selectSlide(slideNumber: number) {
    this.activeSlide = slideNumber;
    // Add your logic here to change the slide content
  }
}
