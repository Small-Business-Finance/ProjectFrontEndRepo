import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditanalystRoutingModule } from './creditanalyst-routing.module';

import { CaprofileComponent } from './caprofile/caprofile.component';
import { CaPersonalComponent } from './ca-personal/ca-personal.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    
    CaprofileComponent,
    CaPersonalComponent
  ],
  imports: [
    CommonModule,
    CreditanalystRoutingModule,RouterModule
  ]
})
export class CreditanalystModule { }
