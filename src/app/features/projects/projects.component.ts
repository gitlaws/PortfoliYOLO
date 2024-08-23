import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Theme } from '../../shared/models/theme.enum';
import { ThemeService } from '../../shared/services/theme/theme.service';

declare var GitHubCalendar: any; // Declare GitHubCalendar to avoid TypeScript errors

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
    // GitHubCalendar('.calendar', 'gitlaws');

    // Enable responsive functionality
    GitHubCalendar('.calendar', 'gitlaws', { responsive: true });

    // Disable global stats
    GitHubCalendar('.calendar', 'gitlaws', { global_stats: true });

    // Use a proxy with type assertion
    GitHubCalendar('.calendar', 'gitlaws', {
      proxy(gitlaws: string) {
        return fetch(`https://your-proxy.com/github?user=${gitlaws}`);
      },
    } as any).then((r: Response) => r.text());
  }
}
