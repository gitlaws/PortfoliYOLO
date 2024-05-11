import { Routes } from '@angular/router';

import { ToolbarComponent } from './core/toolbar/toolbar.component';

import { FooterComponent } from './core/footer/footer.component';

import { HomeComponent } from './core/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'toolbar', component: ToolbarComponent },
  { path: 'footer', component: FooterComponent },
  {
    path: 'projects',
    loadChildren: () =>
      import('./features/projects/projects.component').then(
        (m) => m.ProjectsComponent
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./features/profile-tabnav/profile-tabnav.component').then(
        (m) => m.ProfileTabnavComponent
      ),
  },
];
