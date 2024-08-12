import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-social-links',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss'],
})
export class SocialLinksComponent {
  openLink(event: MouseEvent, url: string): void {
    event.preventDefault();
    window.open(url, '_blank', 'noopener');
  }
}
