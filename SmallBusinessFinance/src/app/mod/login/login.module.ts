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



@NgModule({
  declarations: [
    RegisterCustomerApplicationComponent,
    ViewCustomerApplicationComponent,
    LoginComponent,
    RegisterEnquiryComponent,
    RegisterEmployeeComponent,
    ViewEmployeeComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,FormsModule,ReactiveFormsModule,RouterModule,RERoutingModule
  ]
})
export class LoginModule { }
