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
    path: 'carousel',
    loadComponent: () =>
      import('./features/carousel/carousel.component').then(
        (m) => m.CarouselComponent
      ),
  },
  // other routes...
];
