import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RERoutingModule } from './re-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
<<<<<<< HEAD
=======
import { RegisterLeaveApplicationComponent } from './register-leave-application/register-leave-application.component';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { BmPersonalComponent } from '../branchmanager/bm-personal/bm-personal.component';
import { BranchmanagerModule } from '../branchmanager/branchmanager.module';
import { RePersonalComponent } from './re-personal/re-personal.component';
import { CreditanalystModule } from '../creditanalyst/creditanalyst.module';
import { FinanceheadModule } from '../financehead/financehead.module';
import { TeleheadModule } from '../telehead/telehead.module';
import { OeModule } from '../oe/oe.module';
>>>>>>> fe037908e19c3e3fe7914698859243473f0718b2



@NgModule({
  declarations: [
<<<<<<< HEAD
    ProfileComponent
=======
    ProfileComponent,
    RegisterLeaveApplicationComponent,
    ViewEnquiryComponent,
    RePersonalComponent
>>>>>>> fe037908e19c3e3fe7914698859243473f0718b2
  ],
  imports: [
    CommonModule,
    FormsModule,
<<<<<<< HEAD
    ReactiveFormsModule
    RERoutingModule,RouterModule
=======
    ReactiveFormsModule,
    RERoutingModule,RouterModule,BranchmanagerModule,CreditanalystModule,
    FinanceheadModule,TeleheadModule,OeModule
>>>>>>> fe037908e19c3e3fe7914698859243473f0718b2
  ]
})
export class REModule { }
