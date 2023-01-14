import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceheadRoutingModule } from './financehead-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { FhprofileComponent } from './fhprofile/fhprofile.component';


@NgModule({
  declarations: [
    ProfileComponent,
    FhprofileComponent
  ],
  imports: [
    CommonModule,
    FinanceheadRoutingModule
  ]
})
export class FinanceheadModule { }
