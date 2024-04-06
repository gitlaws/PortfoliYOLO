import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.scss'],
})
export class CubeComponent implements OnInit {
  cubeSides = ['front', 'back', 'right', 'left', 'top', 'bottom'];
  images: { [key: string]: string } = {}; // Add index signature to the images object

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.cubeSides.forEach((side) => {
      this.http
        .get('https://source.unsplash.com/random')
        .subscribe((res: any) => {
          this.images[side] = res.url;
        });
    });
  }
}
