import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { StarfieldService } from './starfield.service';

@Component({
  selector: 'app-starfield',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './starfield.component.html',
  styleUrls: ['./starfield.component.scss'],
})
export class StarfieldComponent implements AfterViewInit {
  @ViewChild('starfieldCanvas', { static: false })
  canvasRef!: ElementRef<HTMLCanvasElement>; // Use definite assignment assertion

  constructor(private starfieldService: StarfieldService) {}

  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    const context = canvas.getContext('2d');

    if (context) {
      // Add null check
      const screenW = window.innerWidth;
      const screenH = window.innerHeight;

      canvas.width = screenW;
      canvas.height = screenH;

      this.starfieldService.initializeStars(screenW, screenH);
      this.starfieldService.startAnimation(context, screenW, screenH);
    } else {
      console.error('Failed to get 2D context');
    }
  }
}
