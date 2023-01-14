import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchmanagerRoutingModule } from './branchmanager-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { BmprofileComponent } from './bmprofile/bmprofile.component';


@NgModule({
  declarations: [
    ProfileComponent,
    BmprofileComponent
  ],
  imports: [
    CommonModule,
    BranchmanagerRoutingModule
  ]
})
export class BranchmanagerModule { }
