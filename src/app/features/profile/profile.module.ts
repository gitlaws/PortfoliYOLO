import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileTabnavComponent } from './profile-tabnav/profile-tabnav.component';
import { TabComponent } from './tab/tab.component';
import { TabnavModule } from './tabnav/tabnav.module';

@NgModule({
  declarations: [ProfileComponent],
  exports: [ProfileComponent],
  imports: [CommonModule, TabComponent, TabnavModule],
})
export class ProfileModule {}
