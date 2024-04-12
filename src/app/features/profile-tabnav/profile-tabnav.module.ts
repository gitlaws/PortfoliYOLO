import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileTabnavComponent } from './profile-tabnav.component'; // Import ProfileTabnavComponent

@NgModule({
  declarations: [
    ProfileTabnavComponent, // Declare ProfileTabnavComponent
    // other declarations...
  ],
  exports: [
    ProfileTabnavComponent, // Export ProfileTabnavComponent if it's used in other modules
  ],
  imports: [
    CommonModule,
    // other imports...
  ],
})
export class ProfileTabnavModule {}
