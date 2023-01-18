import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterCustomerApplicationComponent } from '../Employee/re/register-customer-application/register-customer-application.component';
import { RegisterEnquiryComponent } from '../Employee/re/register-enquiry/register-enquiry.component';
import { RegisterEmployeeComponent } from '../Employee/admin/register-employee/register-employee.component';
import { ViewEmployeeComponent } from '../Employee/admin/view-employee/view-employee.component';
import { UpdateEmployeeComponent } from '../Employee/admin/update-employee/update-employee.component';
import { ProfileComponent } from '../Employee/re/profile/profile.component';
import { OeprofileComponent } from '../Employee/oe/oeprofile/oeprofile.component';
import { BmprofileComponent } from '../Employee/branchmanager/bmprofile/bmprofile.component';
import { FhprofileComponent } from '../Employee/financehead/fhprofile/fhprofile.component';
import { ThprofileComponent } from '../Employee/telehead/thprofile/thprofile.component';
import { CaprofileComponent } from '../Employee/creditanalyst/caprofile/caprofile.component';
import { ViewEnquiryComponent } from '../Employee/re/view-enquiry/view-enquiry.component';
import { ViewCustomerApplicationComponent } from '../Employee/re/view-customer-application/view-customer-application.component';
import { BmPersonalComponent } from '../Employee/branchmanager/bm-personal/bm-personal.component';
import { RePersonalComponent } from '../Employee/re/re-personal/re-personal.component';
import { OePersonalComponent } from '../Employee/oe/oe-personal/oe-personal.component';
import { FhPersonalComponent } from '../Employee/financehead/fh-personal/fh-personal.component';
import { ThPersonalComponent } from '../Employee/telehead/th-personal/th-personal.component';
import { CaPersonalComponent } from '../Employee/creditanalyst/ca-personal/ca-personal.component';
import { DefaulterListComponent } from '../Employee/telehead/defaulter-list/defaulter-list.component';
import { SanctionLetterComponent } from '../Employee/financehead/sanction-letter/sanction-letter.component';
import { ViewCustomerFullDetailsComponent } from '../Employee/re/view-customer-full-details/view-customer-full-details.component';
import { RegisterLeaveApplicationComponent } from '../Employee/re/register-leave-application/register-leave-application.component';
import { ViewLeaveDetailsComponent } from '../Employee/re/view-leave-details/view-leave-details.component';
import { UpdateCustomerApplicationComponent } from '../Employee/re/update-customer-application/update-customer-application.component';


export const loginroutes: Routes = [

  {
    path:'',component:LoginComponent,
  },
  {
    path:'reprofile',component:ProfileComponent,
    children:[
      {
        path:'repersonal',component:RePersonalComponent,
        children:[
          {
            path:'registerleave',component:RegisterLeaveApplicationComponent,
          },
          {
            path:'viewleavedetails',component:ViewLeaveDetailsComponent,
          }
        ]
      },
      {
        path:'enquiry',component:RegisterEnquiryComponent
      },
      {
        path:'viewenquiry',component:ViewEnquiryComponent
      },

      {
        path:'viewCustomer', component:ViewCustomerApplicationComponent,
        children:[
          {
            path:'customerfulldetails/:applicationId',component:ViewCustomerFullDetailsComponent
          },
          {
            path:'updatecustomer',component:UpdateCustomerApplicationComponent
          }
        ]
        
      },
           
        {
          path:'registerCustomer', component:RegisterCustomerApplicationComponent
            
      },
        
      ]
  },
  {
    path:'oeprofile',component:OeprofileComponent,
    children:[
      
      {
        path:'oepersonal',component:OePersonalComponent
      },

      {
        path:'viewenquiry',component:ViewEnquiryComponent
      },
    ]
  },
  {
    path:'bmprofile',component:BmprofileComponent,
    children:[
      
        {
          path:'bmpersonal',component:BmPersonalComponent
        },
       
        {
          path:'viewCustomer', component:ViewCustomerApplicationComponent,
        },
            {
              path:'registerCustomer', component:RegisterCustomerApplicationComponent
              },
          {
            path:'defaulter',component:DefaulterListComponent
          }
      ]
  },
  {
    path:'fhprofile',component:FhprofileComponent,
    children:[
      
      {
        path:'fhpersonal',component:FhPersonalComponent
      },
      {
        path:'registerCustomer', component:RegisterCustomerApplicationComponent
        },
      {
        path:'viewCustomer', component:ViewCustomerApplicationComponent
        },
        {
          path:'sanction',component:SanctionLetterComponent
        }
    ]
  },
  {
    path:'thprofile',component:ThprofileComponent,
    children:[
      
      {
        path:'thpersonal',component:ThPersonalComponent
      },
      {
        path:'registerCustomer', component:RegisterCustomerApplicationComponent
        },
      {
        path:'viewCustomer', component:ViewCustomerApplicationComponent
        },
        {
          path:'defaulter',component:DefaulterListComponent
        }
    ]
  },
  {
    path:'caprofile',component:CaprofileComponent,
    children:[
      
      {
        path:'capersonal',component:CaPersonalComponent
      },
      {
        path:'registerCustomer', component:RegisterCustomerApplicationComponent
        },
      {
        path:'viewCustomer', component:ViewCustomerApplicationComponent
        },
    ]
  },

  {
    path:'viewemployee',component:ViewEmployeeComponent,
    children:[
      {
        path:'registeremployee',component:RegisterEmployeeComponent
      },
      {
        path:'updateemployee',component:UpdateEmployeeComponent
      }
    ]
    
  }

];

@NgModule({
  imports: [RouterModule.forChild(loginroutes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
