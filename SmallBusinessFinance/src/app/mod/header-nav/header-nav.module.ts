import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderNavRoutingModule } from './header-nav-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
   HomeComponent
  ],
  imports: [
    CommonModule,
    HeaderNavRoutingModule
  ]
})
export class HeaderNavModule { }
