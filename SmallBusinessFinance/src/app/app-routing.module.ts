import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { headerroutes } from './mod/header-nav/header-nav-routing.module';
import { DashboardComponent } from './mod/header-nav/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'',component:DashboardComponent,children:headerroutes
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
