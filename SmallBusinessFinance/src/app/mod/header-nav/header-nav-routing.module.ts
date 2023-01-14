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

export const headerroutes: Routes = [
  {
    path:'',component:HomeComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(headerroutes)],
  exports: [RouterModule]
})
export class HeaderNavRoutingModule { }
