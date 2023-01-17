import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RERoutingModule } from './re-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegisterLeaveApplicationComponent } from './register-leave-application/register-leave-application.component';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { BmPersonalComponent } from '../branchmanager/bm-personal/bm-personal.component';
import { BranchmanagerModule } from '../branchmanager/branchmanager.module';
import { RePersonalComponent } from './re-personal/re-personal.component';
import { CreditanalystModule } from '../creditanalyst/creditanalyst.module';
import { FinanceheadModule } from '../financehead/financehead.module';
import { TeleheadModule } from '../telehead/telehead.module';
import { OeModule } from '../oe/oe.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { ViewCustomerFullDetailsComponent } from './view-customer-full-details/view-customer-full-details.component';
import { ViewCustomerApplicationComponent } from './view-customer-application/view-customer-application.component';



@NgModule({
  declarations: [
    ProfileComponent,
    RegisterLeaveApplicationComponent,
    ViewEnquiryComponent,
    RePersonalComponent,
   ],
   
  imports: [
    CommonModule,
    FormsModule,NgxPaginationModule,
    ReactiveFormsModule,
    RouterModule,BranchmanagerModule,CreditanalystModule,
    FinanceheadModule,TeleheadModule,OeModule

  ]
})
export class REModule { }
