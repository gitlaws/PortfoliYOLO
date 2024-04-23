import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./core/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./features/projects/projects.module').then(
        (m) => m.ProjectsModule
      ),
  },
  {
    path: 'profile-tabnav',
    loadChildren: () =>
      import('./features/profile-tabnav/profile-tabnav.module').then(
        (m) => m.ProfileTabnavModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
