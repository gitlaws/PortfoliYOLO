import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ElementRef } from '@angular/core';
import Typewriter from 'typewriter-effect/dist/core';

@Component({
  selector: 'app-typewriter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './typewriter.component.html',
  styleUrls: ['./typewriter.component.scss'],
})
export class TypewriterComponent implements AfterViewInit {
  constructor(private elRef: ElementRef) {}

  ngAfterViewInit() {
    const lines = [
      'Line 1: Welcome to the future.',
      'Line 2: Embrace the AI.',
      'Line 3: Cybernetic enhancements activated.',
    ];

    const container = this.elRef.nativeElement.querySelector(
      '.typewriter-container'
    );

    const createTypewriter = (text: string) => {
      return new Promise<void>((resolve) => {
        const lineElement = document.createElement('div');
        lineElement.className = 'typewriter-line';
        container.appendChild(lineElement);

        const typewriter = new Typewriter(lineElement, {
          loop: false,
          delay: 75,
        });

        typewriter
          .typeString(text)
          .pauseFor(1000)
          .callFunction(() => {
            container.removeChild(lineElement);
            resolve();
          })
          .start();
      });
    };

    lines.reduce((promise, text) => {
      return promise.then(() => createTypewriter(text));
    }, Promise.resolve());
  }
}
