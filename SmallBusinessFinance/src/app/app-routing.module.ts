import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './mod/header-nav/home/home.component';
import { LoginComponent } from './mod/login/login/login.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'login',component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
