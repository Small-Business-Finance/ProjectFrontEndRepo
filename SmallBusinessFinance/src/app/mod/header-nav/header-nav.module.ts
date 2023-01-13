import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderNavRoutingModule } from './header-nav-routing.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
   HomeComponent,
   AboutUsComponent
  ],
  imports: [
    CommonModule,
    HeaderNavRoutingModule,RouterModule
  ]
})
export class HeaderNavModule { }
