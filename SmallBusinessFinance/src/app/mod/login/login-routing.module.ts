import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterCustomerApplicationComponent } from '../Employee/re/register-customer-application/register-customer-application.component';
import { RegisterEnquiryComponent } from '../Employee/re/register-enquiry/register-enquiry.component';
import { RegisterEmployeeComponent } from '../Employee/admin/register-employee/register-employee.component';
import { ViewEmployeeComponent } from '../Employee/admin/view-employee/view-employee.component';
import { UpdateEmployeeComponent } from '../Employee/admin/update-employee/update-employee.component';

const routes: Routes = [

  {
    path:'',component:LoginComponent,
    children:[
      {
          path:'registerCustomer', component:RegisterCustomerApplicationComponent
      },
      {
        path:'enquiry',component:RegisterEnquiryComponent
      },
      {
        path:'regemployee',component:RegisterEmployeeComponent
      },
      {
        path:'viewemployee',component:ViewEmployeeComponent
      },
      {
        path:'updateemployee',component:UpdateEmployeeComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
