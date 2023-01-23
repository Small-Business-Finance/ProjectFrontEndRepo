import { Component } from '@angular/core';
import { CustomerApplicationForm } from 'src/app/classes/customer-application-form';
import { CustomerapplicationService } from 'src/app/shared/customerapplication.service';
import { Router,NavigationEnd  } from '@angular/router';
import { EmailsendingService } from 'src/app/shared/emailsending.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { EmailSender } from 'src/app/classes/email-sender';

@Component({
  selector: 'app-view-customer-application',
  templateUrl: './view-customer-application.component.html',
  styleUrls: ['./view-customer-application.component.css']
})
export class ViewCustomerApplicationComponent {
  currentRoute: string;
  name = 'Get Current Url Route Demo';
  cf:CustomerApplicationForm[];
  applicationStatus="";

  constructor(private fb:FormBuilder,public em:EmailSender,public cs:CustomerapplicationService,public rr:Router,public es:EmailsendingService,public cmf:CustomerApplicationForm,private location:Location){
    console.log(rr.url);
    this.currentRoute=rr.url;
    
    // rr.events.filter(event => event instanceof NavigationEnd)
    //       .subscribe(event => 
    //        {
    //           this.currentRoute = event.url;          
    //           console.log(event);
    //        });
    }

  ngOnInit()
  {

    this.cs.getCustomers().subscribe((clist:CustomerApplicationForm[])=>{
  
      this.cf=clist;
     })
  }

  deleteData(c:number)
  {
    this.cs.deleteCustomer(c).subscribe();
   }

   generatePdf(applicationId:number)
   {

     window.open("http://localhost:9090/pdfapi/genPdf/"+applicationId)
    
  }

  modo(value:string)
  {
    this.applicationStatus=value;
  }

  updatestatus(c:CustomerApplicationForm)
  {
    c.applicationStatus=this.applicationStatus;
    this.cs.updateCustomer(c).subscribe();
    window.location.reload();
  }

  rejectionMail(c:any)
  {
    let obj:any=this.location.getState();
   // this.em.toEmail=obj.customerDetails.emailId;
    this.es.sendRejectionEmail(c).subscribe();
  }
 
}
