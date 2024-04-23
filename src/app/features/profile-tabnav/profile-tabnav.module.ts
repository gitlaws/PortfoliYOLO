import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileTabnavComponent } from './profile-tabnav.component';
import { ProfileTabnavRoutingModule } from './profile-tabnav-routing.module';

@NgModule({
  declarations: [ProfileTabnavComponent],
  imports: [CommonModule, ProfileTabnavRoutingModule],
})
export class ProfileTabnavModule {}
