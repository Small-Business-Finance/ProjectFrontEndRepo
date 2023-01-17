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

  
        itrReturns1:any
        pancard1:any
        moa1:any
        aoa1:any
        auditReport1:any
        tan1:any
        msmeCertificate1:any

  constructor(private _fb:FormBuilder,public cs:CustomerapplicationService){}
  
  ngOnInit()
  {
     this.registerForm=this._fb.group({
        applicationId:[],
        applicationStatus:[''],

        customerDetails:this._fb.group({
          customerId:[],
          aadharId:[],
          customerName:[''],
          address:[''],
          emailId:[''],
          mobileNumber:[],
          panCardNumber:[''],
          dateOfBirth:[''],
          gender:['']
        }),
       
       customerCompanyDetails:this._fb.group({
        companyId:[],
        registrationNumber:[],
	      companyName:[''],
	      companyOwnerName:[''],
	      typeOfBusiness:[''],
	      panCardNumber:[],
	      companyTurnover:[],
        telephoneNo:[],
        faxNumber:[]
       }),
       customerBankDetails:this._fb.group({
        bankId:[],
        accountNumber:[],
        bankName:[''],
        ifscCode:[],
        branchCode:[],
        branchAddress:['']
       }),
       guarantorDetails:this._fb.group({
        guarantorId:[],
        guarantorName:[''],
        guarantorPanCardNumber:[],
        relation:[''],
        mobileNumber:[],
        occupation:['']
       }),
       previousLoanDetails:this._fb.group({
        previousLoanId:[],
        loanAmount:[],
        loanTenure:[],
        paidAmount:[],
        remainingAmount:[],
        defaulterCount:[],
        bankName:['']
       }),
       customerLoanDetails:this._fb.group({
        loanId:[],
        expectedLoanAmount:[],
        expectedLoanTenure:[],
        expectedEmiAmount:[],
        loanStatus:[''],
        loanDisbursedStatus:['']
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

    console.log(this.registerForm.value)
    
    const customerApplication=JSON.stringify(this.registerForm.value);

    const customerloanApplication=new FormData();

    customerloanApplication.append("applicationForm", customerApplication);
    customerloanApplication.append("itrReturns", this.itrReturns1);
    customerloanApplication.append("pancard", this.pancard1);
    customerloanApplication.append("moa", this.moa1);
    customerloanApplication.append("aoa",this.aoa1);
    customerloanApplication.append("auditReport", this.auditReport1 );
    customerloanApplication.append("tan", this.tan1);
    customerloanApplication.append("msmeCertificate", this.msmeCertificate1);
  
    
    this.cs.saveCustomer(customerloanApplication).subscribe();
    alert("Loan Application Submited");
  
  }

            itrReturns(event)
              {
                this.itrReturns1= event.target.files[0];
              }

              pancard(event)
              {
              this.pancard1= event.target.files[0];
              }
           
              moa(event)
           {
              this.moa1= event.target.files[0];
           }

           aoa(event)
             {
              this.aoa1= event.target.files[0];
            }

           

            auditReport(event)
             {
              this.auditReport1= event.target.files[0];
            }

            tan(event)
          {
           this.tan1= event.target.files[0];
          }

          msmeCertificate(event)
          {
          this.msmeCertificate1= event.target.files[0];
          }

        

}

