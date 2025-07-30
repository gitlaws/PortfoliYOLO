import { Component } from '@angular/core';
import { ThemeService } from '../../../shared/services/theme/theme.service';
import { Theme } from '../../../shared/models/theme.enum';
import { CommonModule } from '@angular/common';
import { TypewriterComponent } from '../typewriter/typewriter.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TypewriterComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  title: string;
  theme!: 'light' | 'dark';
}
