import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderNavRoutingModule } from './header-nav-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';
import { ApplyForLoanComponent } from './apply-for-loan/apply-for-loan.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { RERoutingModule } from '../Employee/re/re-routing.module';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
   DashboardComponent,
   AboutUsComponent,
   ContactUsComponent,
   EmiCalculatorComponent,
   ApplyForLoanComponent,
   FaqComponent,
   HomeComponent
  ],
  imports: [
    CommonModule,
    HeaderNavRoutingModule,RouterModule,RERoutingModule,ReactiveFormsModule
  ]
})
export class HeaderNavModule { }
