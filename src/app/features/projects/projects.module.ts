import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'projects', component: ProjectsComponent }];

@NgModule({
  declarations: [ProjectsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule, ProjectsComponent],
})
export class ProjectsModule {}
