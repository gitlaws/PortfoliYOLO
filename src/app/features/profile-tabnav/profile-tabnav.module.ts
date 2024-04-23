import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileTabnavComponent } from './profile-tabnav.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'profile-tabnav', component: ProfileTabnavComponent },
];

@NgModule({
  declarations: [ProfileTabnavComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule, ProfileTabnavComponent],
})
export class ProfileTabnavModule {}
