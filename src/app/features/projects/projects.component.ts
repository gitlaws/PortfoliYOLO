import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Theme } from '../../shared/models/theme.enum';
import { ThemeService } from '../../shared/services/theme/theme.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  theme!: 'light' | 'dark';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.currentTheme.subscribe((theme) => {
      this.theme = theme === Theme.Light ? 'light' : 'dark';
    });

    // Initialize GitHub Calendar
    GitHubCalendar('.calendar', 'gitlaws', { responsive: true });
  }
}
function GitHubCalendar(
  arg0: string,
  arg1: string,
  arg2: { responsive: boolean }
) {
  throw new Error('Function not implemented.');
}
