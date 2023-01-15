import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeleheadRoutingModule } from './telehead-routing.module';
import { ThprofileComponent } from './thprofile/thprofile.component';
import { ThPersonalComponent } from './th-personal/th-personal.component';
import { RouterModule } from '@angular/router';
import { DefaulterListComponent } from './defaulter-list/defaulter-list.component';


@NgModule({
  declarations: [
  
    ThprofileComponent,
    ThPersonalComponent,
    DefaulterListComponent
  ],
  imports: [
    CommonModule,
    TeleheadRoutingModule,RouterModule
  ]
})
export class TeleheadModule { }
