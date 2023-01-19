import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmailsendingService } from 'src/app/shared/emailsending.service';
import { Location } from '@angular/common';
import { CustomerApplicationForm } from 'src/app/classes/customer-application-form';

@Component({
  selector: 'app-sanction-letter',
  templateUrl: './sanction-letter.component.html',
  styleUrls: ['./sanction-letter.component.css']
})
export class SanctionLetterComponent {

  sanctionForm:FormGroup
  cf:CustomerApplicationForm[];

  constructor(private fb:FormBuilder,private es:EmailsendingService,private location:Location) { }

  ngOnInit()
  {
    this.sanctionForm=this.fb.group({
      sanctionedLoanId:[],
      applicationId:[],
      customerName:[''],
      sanctionedLoanAmount:[],
      interestRate:[],
      sanctionedTenure:[],
      emiAmount:[]
    })

  }


generateSanction()
{
  let obj:any=this.location.getState();
  
  this.sanctionForm.get('sanctionedLoanId').setValue(obj.sanctionedLoanId)
  this.sanctionForm.get('CustomerApplicationForm.applicationId').setValue(obj.CustomerApplicationForm.applicationId);
}

  sendEmail()
  {
    const application = JSON.stringify(this.sanctionForm.value);
    const sanctionDocument = new FormData();
    sanctionDocument.append("applicationId", application);
    sanctionDocument.append("customerName", application);
    sanctionDocument.append("sanctionedLoanAmount", application);
    sanctionDocument.append("interestRate", application);
    sanctionDocument.append("sanctionedTenure", application);
    sanctionDocument.append("emiAmount", application);
  
    
    this.es.sendSanctionEmail(sanctionDocument).subscribe();
    window.location.reload();
    
  }
}
