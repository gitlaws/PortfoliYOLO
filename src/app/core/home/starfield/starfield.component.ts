import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starfield',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './starfield.component.html',
  styleUrl: './starfield.component.scss',
})
export class StarfieldComponent implements OnInit {
  canvas!: HTMLCanvasElement;
  context!: CanvasRenderingContext2D;
  screenH!: number;
  screenW!: number;
  stars: Star[] = [];
  fps = 50;
  numStars = 2000;

  ngOnInit(): void {
    this.initCanvas();
    this.createStars();
    setInterval(() => this.animate(), 1000 / this.fps);
  }

  initCanvas(): void {
    this.screenH = window.innerHeight;
    this.screenW = window.innerWidth;
    this.canvas = document.getElementById('space') as HTMLCanvasElement;
    this.canvas.width = this.screenW;
    this.canvas.height = this.screenH;
    this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;
  }

  createStars(): void {
    for (let i = 0; i < this.numStars; i++) {
      const x = Math.round(Math.random() * this.screenW);
      const y = Math.round(Math.random() * this.screenH);
      const length = 1 + Math.random() * 2;
      const opacity = Math.random();
      const star = new Star(x, y, length, opacity);
      this.stars.push(star);
    }
  }

  animate(): void {
    this.context.clearRect(0, 0, this.screenW, this.screenH);
    this.stars.forEach((star) =>
      star.draw(this.context, this.screenW, this.screenH)
    );
  }
}
