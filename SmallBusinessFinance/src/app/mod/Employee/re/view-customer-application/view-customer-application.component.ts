import { Component } from '@angular/core';
import { CustomerApplicationForm } from 'src/app/classes/customer-application-form';
import { CustomerapplicationService } from 'src/app/shared/customerapplication.service';
import { Router,NavigationEnd  } from '@angular/router';
import { EmailsendingService } from 'src/app/shared/emailsending.service';
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

  constructor(public cs:CustomerapplicationService,public rr:Router,public es:EmailsendingService,public sss:loan){
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
    //window.location.reload();
  }

  rejectionMail(c:any)
  {
    this.es.sendRejectionEmail(c).subscribe();
  }
  
date: Date = new Date();
  generateemi(c:CustomerApplicationForm){
    const p=c.customerLoanDetails.expectedLoanAmount;
    const n=c.customerLoanDetails.expectedLoanTenure;
    let ld=c.customerLoanDetails
    const r=c.customerLoanDetails.rateOfInterest/(12*100);
    let emi:number;
    emi=p * r * (Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    console.log(emi);
    console.log(this.date.toLocaleDateString(),)
    this.date.toLocaleDateString();
    for (let i = 1; i <= n; i++) {
      this.date.setMonth(this.date.getMonth() + 1);
      console.log(this.date.toLocaleDateString());
    }
    console.log(this.date.toLocaleDateString());
  } 
}
