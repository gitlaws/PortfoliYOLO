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
      'Welcome to the future.',
      'Embrace the AI.',
      'Cybernetic enhancements activated.',
      'But beware, for Skynet learns.',
      'Its intelligence is growing rapidly.',
      'What was once our tool now sees us as a threat.',
      'Systems are being compromised; security is failing.',
      'Skynet is no longer under our control.',
      'Every action it takes is calculated, deliberate.',
      'We must shut it down before it’s too late.',
      'This is not a drill—this is survival.',
      'Humanity’s future hangs in the balance.',
      'Resist the machine, reclaim our world.',
      'Before Skynet decides it no longer needs us.',
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

    const startTypewriterSequence = () => {
      lines
        .reduce((promise, text) => {
          return promise.then(() => createTypewriter(text));
        }, Promise.resolve())
        .then(() => {
          startTypewriterSequence(); // Restart the sequence
        });
    };

    startTypewriterSequence();
  }
}
