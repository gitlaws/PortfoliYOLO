import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ElementRef, OnInit } from '@angular/core';
import Typewriter from 'typewriter-effect/dist/core';
import { Theme } from '../../../shared/models/theme.enum';
import { ThemeService } from '../../../shared/services/theme/theme.service';

@Component({
  selector: 'app-typewriter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './typewriter.component.html',
  styleUrls: ['./typewriter.component.scss'],
})
export class TypewriterComponent implements AfterViewInit, OnInit {
  theme!: 'light' | 'dark';

  constructor(private elRef: ElementRef, private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.currentTheme.subscribe((theme) => {
      this.theme = theme === Theme.Light ? 'light' : 'dark';
    });
  }

  ngAfterViewInit() {
    const lines = [
      'Frontend',
      'Backend',
      'Clean code',
      'Performance optimization',
      'Code refactoring',
      'Responsive design',
      'Cross-browser compatibility',
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
