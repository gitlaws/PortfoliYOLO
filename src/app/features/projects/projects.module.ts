import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ProjectsRoutingModule],
  exports: [ProjectsComponent],
})
export class ProjectsModule {}
