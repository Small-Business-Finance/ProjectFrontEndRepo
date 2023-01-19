import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceheadRoutingModule } from './financehead-routing.module';
import { FhprofileComponent } from './fhprofile/fhprofile.component';
import { FhPersonalComponent } from './fh-personal/fh-personal.component';
import { RouterModule } from '@angular/router';
import { SanctionLetterComponent } from './sanction-letter/sanction-letter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    
    FhprofileComponent,
    FhPersonalComponent,
    SanctionLetterComponent
  ],
  imports: [
    CommonModule,
    FinanceheadRoutingModule,RouterModule,FormsModule,ReactiveFormsModule
  ]
})
export class FinanceheadModule { }
