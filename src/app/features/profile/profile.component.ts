import { Component } from '@angular/core';
import { Theme } from '../../shared/models/theme.enum';
import { ThemeService } from '../../shared/services/theme/theme.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LinkTreeComponent } from './link-tree/link-tree.component';
import { VideosComponent } from './videos/videos.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, LinkTreeComponent, VideosComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  theme!: 'light' | 'dark';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.currentTheme.subscribe((theme) => {
      this.theme = theme === Theme.Light ? 'light' : 'dark';
    });
  }
}
