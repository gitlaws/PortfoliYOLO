export class Star {
  update(screenW: number, screenH: number) {
    throw new Error('Method not implemented.');
  }
  render(context: CanvasRenderingContext2D, screenW: number, screenH: number) {
    throw new Error('Method not implemented.');
  }
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
