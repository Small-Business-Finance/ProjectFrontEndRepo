import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { RegisterCustomerApplicationComponent } from '../Employee/re/register-customer-application/register-customer-application.component';
import { ViewCustomerApplicationComponent } from '../Employee/re/view-customer-application/view-customer-application.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegisterEnquiryComponent } from '../Employee/re/register-enquiry/register-enquiry.component';



@NgModule({
  declarations: [
    RegisterCustomerApplicationComponent,
    ViewCustomerApplicationComponent,
    LoginComponent,
    RegisterEnquiryComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,FormsModule,ReactiveFormsModule,RouterModule
  ]
})
export class LoginModule { }
