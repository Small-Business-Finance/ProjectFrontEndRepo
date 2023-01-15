import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OeRoutingModule } from './oe-routing.module';

import { OeprofileComponent } from './oeprofile/oeprofile.component';
import { OePersonalComponent } from './oe-personal/oe-personal.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    
    OeprofileComponent,
    OePersonalComponent
  ],
  imports: [
    CommonModule,
    OeRoutingModule,RouterModule
  ]
})
export class OeModule { }
