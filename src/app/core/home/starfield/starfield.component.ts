import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
import { Star } from './star';

@Component({
  selector: 'app-starfield',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './starfield.component.html',
  styleUrls: ['./starfield.component.scss'],
})
export class StarfieldComponent implements OnInit {
  canvas!: HTMLCanvasElement;
  context!: CanvasRenderingContext2D;
  screenH!: number;
  screenW!: number;
  stars: Star[] = [];
  numStars = 2000;

  ngOnInit(): void {
    this.initCanvas();
    this.createStars();
    this.animate();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.initCanvas();
    this.createStars();
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
    this.stars = [];
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
    const draw = () => {
      this.context.clearRect(0, 0, this.screenW, this.screenH);
      this.stars.forEach((star) =>
        star.draw(this.context, this.screenW, this.screenH)
      );
      requestAnimationFrame(draw);
    };
    draw();
  }
}
