import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerapplicationService } from 'src/app/shared/customerapplication.service';
import { Location } from '@angular/common';
import { CustomerDetails } from 'src/app/classes/customer-details';
import { CustomerApplicationForm } from 'src/app/classes/customer-application-form';

@Component({
  selector: 'app-update-customer-application',
  templateUrl: './update-customer-application.component.html',
  styleUrls: ['./update-customer-application.component.css']
})
export class UpdateCustomerApplicationComponent {

  steps:any=1;
  cf:CustomerApplicationForm[];

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
     }),

     customerDocuments:this.fb.group({
      documentId:[]
     })

    })

    this.cs.getCustomers().subscribe((cd:CustomerApplicationForm[])=>{
        this.cf=cd;
    });

   this.editadata();
  }

editadata()
{
  let cobj:any=this.location.getState();

  console.log(cobj.applicationId);
  
  this.updateForm.get('applicationId').setValue(cobj.applicationId)
  this.updateForm.get('applicationStatus').setValue(cobj.applicationStatus);

  this.updateForm.get('customerDetails.customerId').setValue(cobj.customerDetails.customerId);
  this.updateForm.get('customerDetails.aadharId').setValue(cobj.customerDetails.aadharId);
  this.updateForm.get('customerDetails.customerName').setValue(cobj.customerDetails.customerName);
  this.updateForm.get('customerDetails.address').setValue(cobj.customerDetails.address);
  this.updateForm.get('customerDetails.emailId').setValue(cobj.customerDetails.emailId)
  this.updateForm.get('customerDetails.mobileNumber').setValue(cobj.customerDetails.mobileNumber);
  this.updateForm.get('customerDetails.panCardNumber').setValue(cobj.customerDetails.panCardNumber);
  this.updateForm.get('customerDetails.dateOfBirth').setValue(cobj.customerDetails.dateOfBirth);
  this.updateForm.get('customerDetails.gender').setValue(cobj.customerDetails.gender);

  this.updateForm.get('customerCompanyDetails.companyId').setValue(cobj.customerCompanyDetails.companyId);
  this.updateForm.get('customerCompanyDetails.registrationNumber').setValue(cobj.customerCompanyDetails.registrationNumber)
  this.updateForm.get('customerCompanyDetails.companyName').setValue(cobj.customerCompanyDetails.companyName);
  this.updateForm.get('customerCompanyDetails.companyOwnerName').setValue(cobj.customerCompanyDetails.companyOwnerName);
  this.updateForm.get('customerCompanyDetails.typeOfBusiness').setValue(cobj.customerCompanyDetails.typeOfBusiness);
  this.updateForm.get('customerCompanyDetails.panCardNumber').setValue(cobj.customerCompanyDetails.panCardNumber);
  this.updateForm.get('customerCompanyDetails.companyTurnover').setValue(cobj.customerCompanyDetails.companyTurnover);
  this.updateForm.get('customerCompanyDetails.telephoneNo').setValue(cobj.customerCompanyDetails.telephoneNo)
  this.updateForm.get('customerCompanyDetails.faxNumber').setValue(cobj.customerCompanyDetails.faxNumber);

  this.updateForm.get('customerBankDetails.bankId').setValue(cobj.customerBankDetails.bankId);
  this.updateForm.get('customerBankDetails.accountNumber').setValue(cobj.customerBankDetails.accountNumber);
  this.updateForm.get('customerBankDetails.bankName').setValue(cobj.customerBankDetails.bankName);
  this.updateForm.get('customerBankDetails.ifscCode').setValue(cobj.customerBankDetails.ifscCode);
  this.updateForm.get('customerBankDetails.branchCode').setValue(cobj.customerBankDetails.branchCode)
  this.updateForm.get('customerBankDetails.branchAddress').setValue(cobj.customerBankDetails.branchAddress);

  this.updateForm.get('guarantorDetails.guarantorId').setValue(cobj.guarantorDetails.guarantorId);
  this.updateForm.get('guarantorDetails.guarantorName').setValue(cobj.guarantorDetails.guarantorName);
  this.updateForm.get('guarantorDetails.guarantorPanCardNumber').setValue(cobj.guarantorDetails.guarantorPanCardNumber);
  this.updateForm.get('guarantorDetails.relation').setValue(cobj.guarantorDetails.relation);
  this.updateForm.get('guarantorDetails.mobileNumber').setValue(cobj.guarantorDetails.mobileNumber);
  this.updateForm.get('guarantorDetails.occupation').setValue(cobj.guarantorDetails.occupation);

  this.updateForm.get('previousLoanDetails.previousLoanId').setValue(cobj.previousLoanDetails.previousLoanId);
  this.updateForm.get('previousLoanDetails.loanAmount').setValue(cobj.previousLoanDetails.loanAmount);
  this.updateForm.get('previousLoanDetails.loanTenure').setValue(cobj.previousLoanDetails.loanTenure);
  this.updateForm.get('previousLoanDetails.paidAmount').setValue(cobj.previousLoanDetails.paidAmount);
  this.updateForm.get('previousLoanDetails.remainingAmount').setValue(cobj.previousLoanDetails.remainingAmount);
  this.updateForm.get('previousLoanDetails.defaulterCount').setValue(cobj.previousLoanDetails.defaulterCount);
  this.updateForm.get('previousLoanDetails.bankName').setValue(cobj.previousLoanDetails.bankName);

  this.updateForm.get('customerLoanDetails.loanId').setValue(cobj.customerLoanDetails.loanId);
  this.updateForm.get('customerLoanDetails.expectedLoanAmount').setValue(cobj.customerLoanDetails.expectedLoanAmount);
  this.updateForm.get('customerLoanDetails.expectedLoanTenure').setValue(cobj.customerLoanDetails.expectedLoanTenure);
  this.updateForm.get('customerLoanDetails.expectedEmiAmount').setValue(cobj.customerLoanDetails.expectedEmiAmount);
  this.updateForm.get('customerLoanDetails.loanStatus').setValue(cobj.customerLoanDetails.loanStatus);
  this.updateForm.get('customerLoanDetails.loanDisbursedStatus').setValue(cobj.customerLoanDetails.loanDisbursedStatus);
  this.updateForm.get('customerDocuments.documentId').setValue(cobj.customerDocuments.documentId);


}

onSubmit()
{
  
this.cs.updateCustomer(this.updateForm.value).subscribe();
//window.location.reload();
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
