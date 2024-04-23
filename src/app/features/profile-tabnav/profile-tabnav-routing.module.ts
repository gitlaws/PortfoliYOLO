import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileTabnavComponent } from './profile-tabnav.component';

const routes: Routes = [{ path: '', component: ProfileTabnavComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileTabnavRoutingModule {}
