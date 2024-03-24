import { Component } from '@angular/core';
import { TabsComponent } from './tabs/tabs.component';

@Component({
  selector: 'app-profile-hud',
  standalone: true,
  templateUrl: './profile-hud.component.html',
  styleUrl: './profile-hud.component.scss',
  imports: [TabsComponent],
})
export class ProfileHudComponent {}
