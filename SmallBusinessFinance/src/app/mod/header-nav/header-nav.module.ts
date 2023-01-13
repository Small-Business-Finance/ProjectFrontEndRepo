import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderNavRoutingModule } from './header-nav-routing.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
   HomeComponent
  ],
  imports: [
    CommonModule,
    HeaderNavRoutingModule,RouterModule
  ]
})
export class HeaderNavModule { }
