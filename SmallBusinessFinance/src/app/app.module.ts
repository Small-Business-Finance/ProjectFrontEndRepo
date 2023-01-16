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
import { loginroutes, LoginRoutingModule } from './mod/login/login-routing.module';
import { LoginComponent } from './mod/login/login/login.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoginRoutingModule } from './mod/login/login-routing.module';


@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,NgxPaginationModule,
    AppRoutingModule,HttpClientModule,FormsModule,
<<<<<<< HEAD
    ReactiveFormsModule,RouterModule,LoginModule,NgxPaginationModule,
    Ng2SearchPipeModule,LoginRoutingModule
=======
    ReactiveFormsModule,RouterModule,LoginRoutingModule
>>>>>>> 4ad0b13978cbb9e41d0565fc13478fa9e92788c2
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
