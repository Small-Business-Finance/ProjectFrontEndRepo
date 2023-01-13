import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerapplicationService } from 'src/app/shared/customerapplication.service';

@Component({
  selector: 'app-register-customer-application',
  templateUrl: './register-customer-application.component.html',
  styleUrls: ['./register-customer-application.component.css']
})
export class RegisterCustomerApplicationComponent {

  steps:any=1;

  registerForm:FormGroup;

  constructor(private _fb:FormBuilder,public cs:CustomerapplicationService){}
  
  ngOnInit()
  {
     this.registerForm=this._fb.group({
        applicationId:[],
        applicationStatus:[''],

        customerDetails:this._fb.control({
          aadharId:[],
          customerName:[''],
          address:[''],
          emailId:[''],
          mobileNumber:[],
          panCardNumber:[''],
          dateOfBirth:[''],
          gender:['']
        }),
       
       customerCompanyDetails:this._fb.control({
        registrationNumber:[],
	      companyName:[''],
	      companyOwnerName:[''],
	      typeOfBusiness:[''],
	      PanCardNumber:[],
	      companyTurnover:[],
        telephoneNo:[],
        faxNumber:[]
       }),
       customerBankDetails:this._fb.control({
        bankId:[],
        accountNumber:[],
        bankName:[''],
        ifscCode:[],
        branchCode:[],
        branchAddress:['']
       }),
       guarantorDetails:this._fb.control({
        guarantorId:[],
        guarantorName:[''],
        guarantorPanCardNumber:[],
        relation:[''],
        mobileNumber:[],
        occupation:['']
       }),
       previousLoanDetails:({
        previousLoanId:[],
        loanAmount:[],
        loanTenure:[],
        paidAmount:[],
        remainingAmount:[],
        defaulterCount:[],
        bankName:['']
       }),
       customerLoanDetails:({
        loanId:[],
        expectedLoanAmount:[],
        expectedLoanTenure:[],
        expectedEmiAmount:[],
        loanStatus:[''],
        loanDisbursedStatus:['']
       }),
       customerDocuments:({
        documentId:[],
        itrReturns:[],
        pancard:[],
        moa:[],
        aoa:[],
        auditReport:[],
        tan:[],
        msmeCertificate:[]
       })

      })
      }
       
    submit()
    {
      this.steps=this.steps+1;
    
    }
  
  previous()
  {
    this.steps=this.steps-1;
  }

  clickreg()
  {
    this.cs.saveCustomer(this.registerForm.value).subscribe();
  
  }

}

