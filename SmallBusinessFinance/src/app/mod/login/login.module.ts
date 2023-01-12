import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { RegisterCustomerApplicationComponent } from './register-customer-application/register-customer-application.component';
import { ViewCustomerApplicationComponent } from './view-customer-application/view-customer-application.component';


@NgModule({
  declarations: [
    RegisterCustomerApplicationComponent,
    ViewCustomerApplicationComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
