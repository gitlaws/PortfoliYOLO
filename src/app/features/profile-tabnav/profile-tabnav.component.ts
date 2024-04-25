import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { ProfileCardComponent } from './profile-card/profile-card.component';

@Component({
  selector: 'app-profile-tabnav',
  standalone: true,
  imports: [],
  templateUrl: './profile-tabnav.component.html',
  styleUrls: ['./profile-tabnav.component.scss'],
})
export class ProfileTabnavComponent {
  activeTab: any;
  activeSlide = 1;
  currentPage: any;
  tabs: any;
  pages1: any;
  pages2: any;
  pages: any;
  title: string = '';

  constructor(private route: ActivatedRoute) {
    console.log('Navigated to ProfileTabnav component');
  }

  ngOnInit() {
    this.activeTab = 'tab1';
    this.currentPage = 1; // Initialize currentPage to 1
    this.title = this.route.snapshot.data['title'];
  }

  selectSlide(slideNumber: number) {
    this.activeSlide = slideNumber;
    // Add your logic here to change the slide content
  }
}
