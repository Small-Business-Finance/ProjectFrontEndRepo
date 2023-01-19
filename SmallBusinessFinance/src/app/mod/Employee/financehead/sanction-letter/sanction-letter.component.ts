import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmailsendingService } from 'src/app/shared/emailsending.service';
import { Location } from '@angular/common';
import { CustomerApplicationForm } from 'src/app/classes/customer-application-form';
import { EmailSender } from 'src/app/classes/email-sender';

@Component({
  selector: 'app-sanction-letter',
  templateUrl: './sanction-letter.component.html',
  styleUrls: ['./sanction-letter.component.css']
})
export class SanctionLetterComponent {

  sanctionForm:FormGroup;
  ems:EmailSender;
  cf:CustomerApplicationForm[];

  constructor(private fb:FormBuilder,private es:EmailsendingService,private location:Location,public em:EmailSender,public cmf:CustomerApplicationForm) { }

  ngOnInit()
  {
    this.sanctionForm=this.fb.group({
      sanctionedLoanId:[],
      applicationId:[],
      customerName:[''],
      expectedLoanAmount:[],
      rateOfInterest:[],
      expectedLoanTenure:[],
      emiAmount:[]
    })

    this.generateSanction();
  }

  generateSanction()
  {
  let obj:any=this.location.getState();
 // this.sanctionForm.get('sanctionedLoanId').setValue(obj.sanctionedLoanId)
  this.sanctionForm.get('applicationId').setValue(obj.applicationId);
  this.sanctionForm.get('customerName').setValue(obj.customerDetails.customerName);
  this.sanctionForm.get('expectedLoanAmount').setValue(obj.customerLoanDetails.expectedLoanAmount);
  this.sanctionForm.get('rateOfInterest').setValue(obj.customerLoanDetails.rateOfInterest);
  this.sanctionForm.get('expectedLoanTenure').setValue(obj.customerLoanDetails.expectedLoanTenure);
  this.sanctionForm.get('emiAmount').setValue(obj.customerLoanDetails.emiAmount);
  }

  sendEmail()
  {
    const application = JSON.stringify(this.em);
     const sanctionDocument = new FormData();
    // sanctionDocument.append("applicationId", application);
    // sanctionDocument.append("customerName", application);
    // sanctionDocument.append("sanctionedLoanAmount", application);
    // sanctionDocument.append("interestRate", application);
    // sanctionDocument.append("sanctionedTenure", application);
    // sanctionDocument.append("emiAmount", application);
    sanctionDocument.append('this.em.toEmail',application);
    sanctionDocument.append('this.em.fromEmail',application);
    sanctionDocument.append('this.em.subject',application);
    sanctionDocument.append('this.em.message',application);
  
    
    
    this.es.sendSanctionEmail(sanctionDocument).subscribe();
    window.location.reload();
    
  }
}
