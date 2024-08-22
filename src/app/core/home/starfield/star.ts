export class Star {
  x: number;
  y: number;
  z: number;
  size: number;
  speed: number;

  constructor(width: number, height: number) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.z = Math.random() * width;
    this.size = Math.random() * 2 + 1;
    this.speed = Math.random() * 0.05 + 0.05;
  }

  update(width: number, height: number) {
    this.z -= this.speed;
    if (this.z <= 0) {
      this.z = width;
      this.x = Math.random() * width;
      this.y = Math.random() * height;
    }
  }

  render(ctx: CanvasRenderingContext2D, width: number, height: number) {
    const sx = (this.x - width / 2) * (width / this.z);
    const sy = (this.y - height / 2) * (width / this.z);
    const size = this.size * (width / this.z);

    ctx.beginPath();
    ctx.arc(sx + width / 2, sy + height / 2, size, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
  }
}

function animate() {
  const canvas = document.getElementById('starfield') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    console.error('Failed to get 2D context');
    return;
  }
  const width = (canvas.width = window.innerWidth);
  const height = (canvas.height = window.innerHeight);
  const stars = Array.from({ length: 1000 }, () => new Star(width, height));

  function draw() {
    ctx!.clearRect(0, 0, width, height);
    stars.forEach((star) => {
      star.update(width, height);
      star.render(ctx!, width, height);
    });
    requestAnimationFrame(draw);
  }

  draw();
}

animate();
