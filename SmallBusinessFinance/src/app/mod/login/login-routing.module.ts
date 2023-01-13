import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterCustomerApplicationComponent } from './register-customer-application/register-customer-application.component';
import { RegisterEnquiryComponent } from './register-enquiry/register-enquiry.component';

const routes: Routes = [

  {
    path:'',component:LoginComponent,
    children:[
      {
          path:'registerCustomer', component:RegisterCustomerApplicationComponent
      },
      {
        path:'enquiry',component:RegisterEnquiryComponent
      }
      
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
