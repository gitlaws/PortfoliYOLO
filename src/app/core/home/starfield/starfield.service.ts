import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StarfieldService {
  private stars: Star[] = [];
  private fps = 50;
  private numStars = 2000;

  initializeStars(screenW: number, screenH: number): Star[] {
    this.stars = [];
    for (let i = 0; i < this.numStars; i++) {
      const x = Math.round(Math.random() * screenW);
      const y = Math.round(Math.random() * screenH);
      const length = 1 + Math.random() * 2;
      const opacity = Math.random();
      const star = new Star(x, y, length, opacity);
      this.stars.push(star);
    }
    return this.stars;
  }

  startAnimation(
    context: CanvasRenderingContext2D,
    screenW: number,
    screenH: number
  ) {
    setInterval(() => this.animate(context, screenW, screenH), 1000 / this.fps);
  }

  private animate(
    context: CanvasRenderingContext2D,
    screenW: number,
    screenH: number
  ) {
    context.clearRect(0, 0, screenW, screenH);
    this.stars.forEach((star) => star.draw(context, screenW, screenH));
  }
}

class Star {
  constructor(
    public x: number,
    public y: number,
    public length: number,
    public opacity: number
  ) {}

  draw(context: CanvasRenderingContext2D, screenW: number, screenH: number) {
    context.beginPath();
    context.moveTo(this.x, this.y);
    context.lineTo(this.x, this.y + this.length);
    context.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
    context.stroke();
  }
}
