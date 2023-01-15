import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchmanagerRoutingModule } from './branchmanager-routing.module';
import { BmprofileComponent } from './bmprofile/bmprofile.component';
import { BmPersonalComponent } from './bm-personal/bm-personal.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
  
    BmprofileComponent,
    BmPersonalComponent
  ],
  imports: [
    CommonModule,
    BranchmanagerRoutingModule,RouterModule
  ]
})
export class BranchmanagerModule { }
