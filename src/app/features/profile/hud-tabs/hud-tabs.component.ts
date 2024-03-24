import { Component } from '@angular/core';

@Component({
  selector: 'app-hud-tabs',
  standalone: true,
  imports: [],
  templateUrl: './hud-tabs.component.html',
  styleUrl: './hud-tabs.component.scss',
})
export class HudTabsComponent {
  activeTab: any;
  activeSlide = 1;
  currentPage: any;

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
