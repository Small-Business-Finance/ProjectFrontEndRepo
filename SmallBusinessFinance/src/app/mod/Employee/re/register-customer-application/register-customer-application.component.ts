import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private _fb:FormBuilder,public cs:CustomerapplicationService,private location:Location,public router:Router){}
  
  ngOnInit()
  {
     this.registerForm=this._fb.group({
        applicationId:[],
        applicationStatus:['Registered'],

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
        rateOfInterest:[],
        loanStatus:[''],
        loanDisbursedStatus:[''],
        defaulterCount:[0]
        // emitable:this._fb.array([{
        //   emiDetailsId:0,
        //   emiStatus:'',
        //   emidate:'', 
        //   emiTenure:0,
        //   emiAmount:0
        // }])
       })
      
      })
      this.regcust();
      }
      regcust(){
        let obj:any=this.location.getState();
this.registerForm.get('customerDetails.customerName').setValue(obj.customerName);
this.registerForm.get('customerDetails.address').setValue(obj.customerAddress);
this.registerForm.get('customerCompanyDetails.companyName').setValue(obj.companyName);
this.registerForm.get('customerDetails.mobileNumber').setValue(obj.mobileNumber);
this.registerForm.get('customerDetails.emailId').setValue(obj.emailId);
this.registerForm.get('customerDetails.panCardNumber').setValue(obj.customerPancardNumber);
this.registerForm.get('customerCompanyDetails.panCardNumber').setValue(obj.companyPancardNumber);
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
    alert("Loan Application Submitted");
    this.router.navigate(['reprofile/viewCustomer'])

  
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

