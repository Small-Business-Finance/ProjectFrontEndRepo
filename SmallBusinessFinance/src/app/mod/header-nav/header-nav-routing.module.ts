import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ApplyForLoanComponent } from './apply-for-loan/apply-for-loan.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';
import { FaqComponent } from './faq/faq.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from '../Employee/re/profile/profile.component';
import { OeprofileComponent } from '../Employee/oe/oeprofile/oeprofile.component';
import { BmprofileComponent } from '../Employee/branchmanager/bmprofile/bmprofile.component';
import { FhprofileComponent } from '../Employee/financehead/fhprofile/fhprofile.component';
import { ThprofileComponent } from '../Employee/telehead/thprofile/thprofile.component';
import { CaprofileComponent } from '../Employee/creditanalyst/caprofile/caprofile.component';
import { ViewEmployeeComponent } from '../Employee/admin/view-employee/view-employee.component';
import { RegisterEnquiryComponent } from '../Employee/re/register-enquiry/register-enquiry.component';
import { RegisterCustomerApplicationComponent } from '../Employee/re/register-customer-application/register-customer-application.component';

export const headerroutes: Routes = [
  {
    path:'',component:HomeComponent,
  
  },
  {
    path:'aboutus',component:AboutUsComponent
  },
  {
    path:'contactus',component:ContactUsComponent
  },
  {
    path:'emicalculator',component:EmiCalculatorComponent
  },
  {
    path:'employee',component:LoginComponent
  },
  {
    path:'applyforloan',component:ApplyForLoanComponent
  },
  {
    path:'faqs',component:FaqComponent
  },

  {
    path:'reprofile',component:ProfileComponent,
    children:[
      {
        path:'enquiry',component:RegisterEnquiryComponent
      },
       
    {
    path:'registerCustomer', component:RegisterCustomerApplicationComponent
    },

    ]
  },
  {
    path:'oeprofile',component:OeprofileComponent
  },
  {
    path:'bmprofile',component:BmprofileComponent
  },
  {
    path:'fhprofile',component:FhprofileComponent
  },
  {
    path:'thprofile',component:ThprofileComponent
  },
  {
    path:'caprofile',component:CaprofileComponent
  },
  {
    path:'viewemployee',component:ViewEmployeeComponent
  },

 
 
];

@NgModule({
  imports: [RouterModule.forChild(headerroutes)],
  exports: [RouterModule]
})
export class HeaderNavRoutingModule { }
