import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title: string;

  constructor(private route: ActivatedRoute) {
    this.title = this.route.snapshot.data['title'];
    console.log('Navigated to Home component');
  }
}
