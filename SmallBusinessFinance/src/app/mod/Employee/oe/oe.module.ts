import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OeRoutingModule } from './oe-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { OeprofileComponent } from './oeprofile/oeprofile.component';


@NgModule({
  declarations: [
    ProfileComponent,
    OeprofileComponent
  ],
  imports: [
    CommonModule,
    OeRoutingModule
  ]
})
export class OeModule { }
