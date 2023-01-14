import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditanalystRoutingModule } from './creditanalyst-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { CaprofileComponent } from './caprofile/caprofile.component';


@NgModule({
  declarations: [
    ProfileComponent,
    CaprofileComponent
  ],
  imports: [
    CommonModule,
    CreditanalystRoutingModule
  ]
})
export class CreditanalystModule { }
