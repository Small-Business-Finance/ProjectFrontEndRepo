import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerapplicationService } from 'src/app/shared/customerapplication.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-customer-application',
  templateUrl: './update-customer-application.component.html',
  styleUrls: ['./update-customer-application.component.css']
})
export class UpdateCustomerApplicationComponent {

  steps:any=1;
  constructor(private fb:FormBuilder,private cs:CustomerapplicationService,private location:Location) { }

  updateForm:FormGroup;

  ngOnInit() {
  
    this.updateForm=this.fb.group({
      applicationId:[],
      applicationStatus:[''],

      customerDetails:this.fb.group({
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
     
     customerCompanyDetails:this.fb.group({
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
     customerBankDetails:this.fb.group({
      bankId:[],
      accountNumber:[],
      bankName:[''],
      ifscCode:[],
      branchCode:[],
      branchAddress:['']
     }),
     guarantorDetails:this.fb.group({
      guarantorId:[],
      guarantorName:[''],
      guarantorPanCardNumber:[],
      relation:[''],
      mobileNumber:[],
      occupation:['']
     }),
     previousLoanDetails:this.fb.group({
      previousLoanId:[],
      loanAmount:[],
      loanTenure:[],
      paidAmount:[],
      remainingAmount:[],
      defaulterCount:[],
      bankName:['']
     }),
     customerLoanDetails:this.fb.group({
      loanId:[],
      expectedLoanAmount:[],
      expectedLoanTenure:[],
      expectedEmiAmount:[],
      loanStatus:[''],
      loanDisbursedStatus:['']
     })

    })
    
  this.editadata();
    
  }

editadata()
{
  let cobj:any=this.location.getState();

console.log(cobj.applicationId);
if(cobj.applicationId!=0)
{
 
  this.updateForm.get('applicationId').setValue(cobj.applicationId)
  this.updateForm.get('applicationStatus').setValue(cobj.applicationStatus);

  this.updateForm.get('customerId').setValue(cobj.customerDetails.customerId);
  this.updateForm.get('aadharId').setValue(cobj.customerDetails.aadharId);
  this.updateForm.get('customerName').setValue(cobj.customerDetails.customerName);
  this.updateForm.get('address').setValue(cobj.customerDetails.address);
  this.updateForm.get('emailId').setValue(cobj.customerDetails.emailId)
  this.updateForm.get('mobileNumber').setValue(cobj.customerDetails.mobileNumber);
  this.updateForm.get('panCardNumber').setValue(cobj.customerDetails.panCardNumber);
  this.updateForm.get('dateOfBirth').setValue(cobj.customerDetails.dateOfBirth);
  this.updateForm.get('gender').setValue(cobj.customerDetails.gender);

  this.updateForm.get('companyId').setValue(cobj.customerCompanyDetails.companyId);
  this.updateForm.get('registrationNumber').setValue(cobj.customerCompanyDetails.registrationNumber)
  this.updateForm.get('companyName').setValue(cobj.customerCompanyDetails.companyName);
  this.updateForm.get('companyOwnerName').setValue(cobj.customerCompanyDetails.companyOwnerName);
  this.updateForm.get('typeOfBusiness').setValue(cobj.customerCompanyDetails.typeOfBusiness);
  this.updateForm.get('panCardNumber').setValue(cobj.customerCompanyDetails.panCardNumber);
  this.updateForm.get('companyTurnover').setValue(cobj.customerCompanyDetails.companyTurnover);
  this.updateForm.get('telephoneNo').setValue(cobj.customerCompanyDetails.telephoneNo)
  this.updateForm.get('faxNumber').setValue(cobj.customerCompanyDetails.faxNumber);

  this.updateForm.get('bankId').setValue(cobj.customerBankDetails.bankId);
  this.updateForm.get('accountNumber').setValue(cobj.customerBankDetails.accountNumber);
  this.updateForm.get('bankName').setValue(cobj.customerBankDetails.bankName);
  this.updateForm.get('ifscCode').setValue(cobj.customerBankDetails.ifscCode);
  this.updateForm.get('branchCode').setValue(cobj.customerBankDetails.branchCode)
  this.updateForm.get('branchAddress').setValue(cobj.customerBankDetails.branchAddress);

  this.updateForm.get('guarantorId').setValue(cobj.guarantorDetails.guarantorId);
  this.updateForm.get('guarantorName').setValue(cobj.guarantorDetails.guarantorName);
  this.updateForm.get('guarantorPanCardNumber').setValue(cobj.guarantorDetails.guarantorPanCardNumber);
  this.updateForm.get('relation').setValue(cobj.guarantorDetails.relation);
  this.updateForm.get('mobileNumber').setValue(cobj.guarantorDetails.mobileNumber);
  this.updateForm.get('occupation').setValue(cobj.guarantorDetails.occupation);

  this.updateForm.get('previousLoanId').setValue(cobj.previousLoanDetails.previousLoanId);
  this.updateForm.get('loanAmount').setValue(cobj.previousLoanDetails.loanAmount);
  this.updateForm.get('loanTenure').setValue(cobj.previousLoanDetails.loanTenure);
  this.updateForm.get('paidAmount').setValue(cobj.previousLoanDetails.paidAmount);
  this.updateForm.get('remainingAmount').setValue(cobj.previousLoanDetails.remainingAmount);
  this.updateForm.get('defaulterCount').setValue(cobj.previousLoanDetails.defaulterCount);
  this.updateForm.get('bankName').setValue(cobj.previousLoanDetails.bankName);

  this.updateForm.get('loanId').setValue(cobj.customerLoanDetails.loanId);
  this.updateForm.get('expectedLoanAmount').setValue(cobj.customerLoanDetails.expectedLoanAmount);
  this.updateForm.get('expectedLoanTenure').setValue(cobj.customerLoanDetails.expectedLoanTenure);
  this.updateForm.get('expectedEmiAmount').setValue(cobj.customerLoanDetails.expectedEmiAmount);
  this.updateForm.get('loanStatus').setValue(cobj.customerLoanDetails.loanStatus);
  this.updateForm.get('loanDisbursedStatus').setValue(cobj.customerLoanDetails.loanDisbursedStatus);
  


}
}
onSubmit()
{
  
this.cs.updateCustomer(this.updateForm.value).subscribe();
window.location.reload();
}

submit()
    {
      this.steps=this.steps+1;
    
    }
  
  previous()
  {
    this.steps=this.steps-1;
  }

}
