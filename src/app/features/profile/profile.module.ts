import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileTabnavComponent } from './profile-tabnav/profile-tabnav.component';
import { HudTabsComponent } from './hud-tabs/hud-tabs.component';

@NgModule({
  declarations: [ProfileComponent],
  exports: [ProfileComponent],
  imports: [CommonModule, ProfileTabnavComponent, HudTabsComponent],
})
export class ProfileModule {}
