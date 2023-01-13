import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterCustomerApplicationComponent } from './register-customer-application/register-customer-application.component';

const routes: Routes = [

  {
    path:'',component:LoginComponent,
    children:[
      {
      
          path:'registerCustomer', component:RegisterCustomerApplicationComponent
      }
      
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
