import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RERoutingModule } from './re-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
    RERoutingModule,RouterModule
  ]
})
export class REModule { }
