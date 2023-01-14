import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeleheadRoutingModule } from './telehead-routing.module';
import { ProfileComponent } from './thprofile/profile.component';
import { ThprofileComponent } from './thprofile/thprofile.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ThprofileComponent
  ],
  imports: [
    CommonModule,
    TeleheadRoutingModule
  ]
})
export class TeleheadModule { }
