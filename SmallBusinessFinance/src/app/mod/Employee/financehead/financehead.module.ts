import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceheadRoutingModule } from './financehead-routing.module';
import { FhprofileComponent } from './fhprofile/fhprofile.component';
import { FhPersonalComponent } from './fh-personal/fh-personal.component';
import { RouterModule } from '@angular/router';
import { SanctionLetterComponent } from './sanction-letter/sanction-letter.component';


@NgModule({
  declarations: [
    
    FhprofileComponent,
    FhPersonalComponent,
    SanctionLetterComponent
  ],
  imports: [
    CommonModule,
    FinanceheadRoutingModule,RouterModule
  ]
})
export class FinanceheadModule { }
