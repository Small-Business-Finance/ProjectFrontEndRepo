import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { RegisterEnquiryComponent } from './register-enquiry/register-enquiry.component';

const routes: Routes = [

 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RERoutingModule { }
