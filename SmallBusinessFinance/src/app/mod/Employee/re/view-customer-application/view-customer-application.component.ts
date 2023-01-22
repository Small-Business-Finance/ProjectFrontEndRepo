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

  constructor(public loand:CustomerLoanDetails,public cs:CustomerapplicationService,
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

     
this.emiform=this.fb.group({
 
  loanId:[],
  expectedLoanAmount:[],
  expectedLoanTenure:[],
  rateOfInterest:[],
  loanStatus:[''],
  loanDisbursedStatus:[''],
  defaultorCount:0,

  emitable:this.fb.group({
    emiDetailsId: 0,
        emiStatus: '',
        emidate: '',
        emiTenure: 0,
        emiAmount: 0
  })
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
 
  
  emi:number;
  p:number;
  r:number;
  n:number;
date: Date = new Date();
  generateemi(c:CustomerApplicationForm){
   
      this.date.toLocaleDateString();
      this.p=c.customerLoanDetails.expectedLoanAmount;
 
      this.r=c.customerLoanDetails.rateOfInterest/(12*100);
      this.n=c.customerLoanDetails.expectedLoanTenure;
     this.emi=this.p * this.r * (Math.pow(1 + this.r, this.n)) / (Math.pow(1 + this.r, this.n) - 1);
        console.log(this.emi);
        console.log(this.p,this.n);
        console.log(c.customerLoanDetails.expectedLoanTenure)
        console.log(this.date.toLocaleDateString(),)
    for (let i = 1; i <= c.customerLoanDetails.expectedLoanTenure; i++) {
 
  this.date.setMonth(this.date.getMonth() + 1);
  console.log(this.date.toLocaleDateString());
        this.loand=c.customerLoanDetails;
        this.emiform.get('emitable.emiTenure').setValue(this.n);
this.emiform.get('emitable.emiAmount').setValue(this.emi);
this.emiform.get('emitable.emidate').setValue(this.date.toLocaleDateString());
this.emiform.get('emitable.emiStatus').setValue("Waiting");
this.emiform.get('loanId').setValue(c.customerLoanDetails.loanId);
this.emiform.get('expectedLoanAmount').setValue(this.p);
this.emiform.get('expectedLoanTenure').setValue(this.n);
this.emiform.get('rateOfInterest').setValue(this.r);
this.emiform.get('loanStatus').setValue("Disbursed");
this.emiform.get('loanDisbursedStatus').setValue("Disbursed");
c.customerLoanDetails=this.emiform.value;
this.sss.saveemi(c,c.applicationId).subscribe();
}
  
  } 

}
 // loand:CustomerLoanDetails={
  //   loanId: 0,
  //   expectedLoanAmount: 0,
  //   expectedLoanTenure: 0,
  //   rateOfInterest: 0,
  //   loanStatus: '',
  //   loanDisbursedStatus: '',
  //   defaultorCount: 0,
  //   emitable:{
  //     emiDetailsId: 0,
  //     emiStatus: '',
  //     emidate: undefined,
  //     emiTenure: 0,
  //     emiAmount: 0
  //   }
  // }