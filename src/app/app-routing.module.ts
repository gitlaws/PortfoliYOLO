import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent } from './projects/projects.component';
import { ProfileTabnavComponent } from './profile-tabnav/profile-tabnav.component';

const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'profile-tabnav', component: ProfileTabnavComponent },
  // more routes here as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
