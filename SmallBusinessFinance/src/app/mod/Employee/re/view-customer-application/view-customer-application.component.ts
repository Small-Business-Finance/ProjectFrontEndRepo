import { Component } from '@angular/core';
import { CustomerApplicationForm } from 'src/app/classes/customer-application-form';
import { CustomerapplicationService } from 'src/app/shared/customerapplication.service';
import { Router,NavigationEnd  } from '@angular/router';
import { EmailsendingService } from 'src/app/shared/emailsending.service';
import { LoanService } from 'src/app/shared/loan.service';
import { CustomerLoanDetails } from 'src/app/classes/customer-loan-details';
import { EmiTable } from 'src/app/classes/emi-table';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  constructor(public loandetails:CustomerLoanDetails,public cs:CustomerapplicationService,
    public rr:Router,public es:EmailsendingService,public sss:LoanService,public fb:FormBuilder){
    console.log(rr.url);
    this.currentRoute=rr.url;
    
    // rr.events.filter(event => event instanceof NavigationEnd)
    //       .subscribe(event => 
    //        {
    //           this.currentRoute = event.url;          
    //           console.log(event);
    //        });
    }
    emiform:FormGroup;
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
this.sss.saveemi(c.applicationId).subscribe();
  } 

}
 