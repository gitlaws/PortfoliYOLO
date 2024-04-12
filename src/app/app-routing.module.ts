import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './features/projects/projects.component';
import { ProfileTabnavComponent } from './features/profile-tabnav/profile-tabnav.component';

const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'profile-tabnav', component: ProfileTabnavComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
