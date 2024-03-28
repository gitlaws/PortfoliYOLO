import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { routes } from '../../app.routes';
import { ProjectsComponent } from '../../features/projects/projects.component'; // Fix: Corrected the file path

const projectRoutes: Routes = [{ path: '', component: ProjectsComponent }];

@NgModule({
  declarations: [ProjectsComponent],
  imports: [CommonModule, RouterModule.forChild(projectRoutes)],
  exports: [ProjectsComponent],
})
export class ProjectsModule {}
