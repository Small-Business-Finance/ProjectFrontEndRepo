import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './mod/login/login.module';
import { HeaderNavModule } from './mod/header-nav/header-nav.module';
import { RouterModule } from '@angular/router';
import { REModule } from './mod/Employee/re/re.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginRoutingModule } from './mod/login/login-routing.module';


@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,NgxPaginationModule,LoginRoutingModule,
    AppRoutingModule,HttpClientModule,FormsModule,
    ReactiveFormsModule,RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
