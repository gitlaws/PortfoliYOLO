import { Component } from '@angular/core';
import { ThemeService } from '../../../shared/services/theme/theme.service';
import { Theme } from '../../../shared/models/theme.enum';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss'],
  standalone: true,
})
export class CertificationsComponent {
  theme!: 'light' | 'dark';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.currentTheme.subscribe((theme) => {
      this.theme = theme === Theme.Light ? 'light' : 'dark';
    });
  }
}
