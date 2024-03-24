import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileTabnavComponent } from '../profile-tabnav/profile-tabnav.component';

@NgModule({
  declarations: [ProfileComponent],
  exports: [ProfileComponent],
  imports: [CommonModule, ProfileTabnavComponent],
})
export class ProfileModule {}
