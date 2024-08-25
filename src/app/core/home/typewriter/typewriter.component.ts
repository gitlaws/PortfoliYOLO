import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import Typewriter from 'typewriter-effect/dist/core';

@Component({
  selector: 'app-typewriter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './typewriter.component.html',
  styleUrls: ['./typewriter.component.scss'],
})
export class TypewriterComponent implements AfterViewInit {
  app: HTMLElement | null = null;

  ngAfterViewInit() {
    this.app = document.getElementById('app');

    if (this.app) {
      const typewriter = new Typewriter(this.app, {
        loop: true,
        delay: 75,
      });

      typewriter
        .pauseFor(2500)
        .typeString('A simple yet powerful native javascript')
        .pauseFor(300)
        .deleteChars(10)
        .typeString(
          '<strong>JS</strong> plugin for a cool typewriter effect and '
        )
        .typeString(
          '<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>'
        )
        .pauseFor(1000)
        .start();
    }
  }
}
