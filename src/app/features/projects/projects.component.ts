import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  title: string = '';
  constructor(private route: ActivatedRoute) {
    console.log('Navigated to Projects component');
  }

  ngOnInit() {
    this.title = this.route.snapshot.data['title'];
  }
}
