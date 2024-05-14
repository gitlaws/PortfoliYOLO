import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./core/home/home.component').then((m) => m.HomeComponent),
  },

  {
    path: 'projects',
    loadComponent: () =>
      import('./features/projects/projects.component').then(
        (component) => component.ProjectsComponent
      ),
  },
  {
    path: 'profile-tabnav',
    loadComponent: () =>
      import('./features/profile-tabnav/profile-tabnav.component').then(
        (m) => m.ProfileTabnavComponent
      ),
  },
  // other routes...
];
