import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmailsendingService } from 'src/app/shared/emailsending.service';
import { Location } from '@angular/common';
import { CustomerApplicationForm } from 'src/app/classes/customer-application-form';
import { EmailSender } from 'src/app/classes/email-sender';
import { CustomerapplicationService } from 'src/app/shared/customerapplication.service';


@Component({
  selector: 'app-sanction-letter',
  templateUrl: './sanction-letter.component.html',
  styleUrls: ['./sanction-letter.component.css']
})
export class SanctionLetterComponent {

  sanctionForm:FormGroup;

  constructor(private fb:FormBuilder,private ems:EmailsendingService,private location:Location,private cmf:CustomerApplicationForm,public ee:EmailSender,public cs:CustomerapplicationService) { }

  
  // es:EmailSender={
  //   toEmail: '',
  //   subject: '',
  //   message: ''
  // }
  ngOnInit()
  {
    this.sanctionForm=this.fb.group({
      sanctionedLoanId:[],
      applicationStatus:[''],
      applicationId:[],
      customerName:[''],
      emailId:[''],
      expectedLoanAmount:[],
      rateOfInterest:[],
      expectedLoanTenure:[],
      toEmail: '',
     subject: '',
      message:''
    })

    this.generateSanction();
  }

  generateSanction()
  {
  let obj:any=this.location.getState();
 this.sanctionForm.get('sanctionedLoanId').setValue(obj.sanctionedLoanId)
  this.sanctionForm.get('applicationId').setValue(obj.applicationId);
  this.sanctionForm.get('applicationStatus').setValue(obj.applicationStatus);
  this.sanctionForm.get('customerName').setValue(obj.customerDetails.customerName);
   this.sanctionForm.get('emailId').setValue(obj.customerDetails.emailId);
  this.sanctionForm.get('expectedLoanAmount').setValue(obj.customerLoanDetails.expectedLoanAmount);
  this.sanctionForm.get('rateOfInterest').setValue(obj.customerLoanDetails.rateOfInterest);
  this.sanctionForm.get('expectedLoanTenure').setValue(obj.customerLoanDetails.expectedLoanTenure);

  this.sanctionForm.get('toEmail').setValue(obj.customerDetails.emailId)
  this.sanctionForm.get('subject').setValue(this.ee.subject);
  this.sanctionForm.get('message').setValue(this.cmf.customerLoanDetails);
  }

  sendEmail()
  {
    console.log(this.sanctionForm.value)
    this.ems.sendSanctionEmail(this.sanctionForm.value).subscribe();
    let obj:any=this.location.getState();
    obj.applicationStatus="Sanctioned";
    obj.customerLoanDetails.expectedLoanAmount=this.sanctionForm.controls['expectedLoanAmount'].value;
    obj.customerLoanDetails.expectedLoanTenure=this.sanctionForm.controls['expectedLoanTenure'].value;
    obj.customerLoanDetails.rateOfInterest=this.sanctionForm.controls['rateOfInterest'].value;
    this.cs.updateCustomer(obj).subscribe();
    //window.location.reload();
    
  }

  
}
