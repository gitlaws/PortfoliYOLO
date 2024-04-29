import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileTabnavRoutingModule } from './profile-tabnav-routing.module';
import { ProfileTabnavComponent } from './profile-tabnav.component';

@NgModule({
  declarations: [ProfileTabnavComponent],
  imports: [CommonModule, ProfileTabnavRoutingModule],
  exports: [ProfileTabnavComponent],
})
export class ProfileTabnavModule {}
