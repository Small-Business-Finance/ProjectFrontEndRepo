import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { RegisterCustomerApplicationComponent } from '../Employee/re/register-customer-application/register-customer-application.component';
import { ViewCustomerApplicationComponent } from '../Employee/re/view-customer-application/view-customer-application.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegisterEnquiryComponent } from '../Employee/re/register-enquiry/register-enquiry.component';
import { RegisterEmployeeComponent } from '../Employee/admin/register-employee/register-employee.component';
import { ViewEmployeeComponent } from '../Employee/admin/view-employee/view-employee.component';
import { UpdateEmployeeComponent } from '../Employee/admin/update-employee/update-employee.component';
import { RERoutingModule } from '../Employee/re/re-routing.module'
import { BranchmanagerModule } from '../Employee/branchmanager/branchmanager.module';
import { TeleheadModule } from '../Employee/telehead/telehead.module';
import { FinanceheadModule } from '../Employee/financehead/financehead.module';
import { OeModule } from '../Employee/oe/oe.module';
import { REModule } from '../Employee/re/re.module';
import { CreditanalystModule } from '../Employee/creditanalyst/creditanalyst.module';
import { ProfileComponent } from '../Employee/re/profile/profile.component';
import { NgxPaginationModule } from 'ngx-pagination/lib/ngx-pagination.module';
import { ViewCustomerFullDetailsComponent } from '../Employee/re/view-customer-full-details/view-customer-full-details.component';
import { ViewLeaveDetailsComponent } from '../Employee/re/view-leave-details/view-leave-details.component';
import { SanctionLetterComponent } from '../Employee/financehead/sanction-letter/sanction-letter.component';



@NgModule({
  declarations: [
    RegisterCustomerApplicationComponent,
    ViewCustomerApplicationComponent,
    ViewCustomerFullDetailsComponent,
    LoginComponent,
    RegisterEnquiryComponent,
    RegisterEmployeeComponent,
    ViewEmployeeComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,FormsModule,ReactiveFormsModule,RouterModule,
    RERoutingModule,BranchmanagerModule,TeleheadModule,FinanceheadModule,OeModule,CreditanalystModule,
    REModule
  ]
})
export class LoginModule { }
