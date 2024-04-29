import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProfileTabnavComponent } from '../profile-tabnav/profile-tabnav.component';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [CommonModule, ProjectsRoutingModule, ProjectsComponent],
  exports: [ProfileTabnavComponent],
})
export class ProjectsModule {}
