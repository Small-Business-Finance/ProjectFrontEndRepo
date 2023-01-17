import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { RegisterEnquiryComponent } from './register-enquiry/register-enquiry.component';
import { ViewCustomerFullDetailsComponent } from './view-customer-full-details/view-customer-full-details.component';

const routes: Routes = [

  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RERoutingModule { }
