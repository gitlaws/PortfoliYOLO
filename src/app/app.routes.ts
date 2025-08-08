import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./core/home/home.component').then((m) => m.HomeComponent),
  },

  {
    path: 'Home',
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
    path: 'profile',
    loadComponent: () =>
      import('./features/profile/profile.component').then(
        (m) => m.ProfileComponent
      ),
  },

  // other routes...
  {
    path: 'mock',
    loadComponent: () =>
      import('./features/mock/mock.component').then(
        (component) => component.MockComponent
      ),
  },
];
