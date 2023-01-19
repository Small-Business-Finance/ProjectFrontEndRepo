import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerApplicationForm } from '../classes/customer-application-form';
import { CustomerBankDetails } from '../classes/customer-bank-details';
import { CustomerDocuments } from '../classes/customer-documents';
import { CustomerLoanDetails } from '../classes/customer-loan-details';
import { GuarantorDetails } from '../classes/guarantor-details';
import { PreviousLoanDetails } from '../classes/previous-loan-details';

@Injectable({
  providedIn: 'root'
})
export class CustomerapplicationService {
  
  constructor(private http:HttpClient) { }

  c:CustomerApplicationForm={
    applicationId: 0,
    applicationStatus: '',
    customerDetails: {
      customerId:0,
      aadharId: 0,
      customerName: '',
      emailId: '',
      address:'',
      mobileNumber: 0,
      panCardNumber: '',
      dateOfBirth: '',
      gender: ''
    },
    customerCompanyDetails: {
      companyId:0,
      registrationNumber: 0,
      companyName: '',
      companyOwnerName: '',
      typeOfBusiness: '',
      panCardNumber: '',
      companyTurnover: 0,
      telephoneNo:0,
      faxNumber:0
    },
    customerBankDetails: {
      bankId: 0,
      accountNumber: 0,
      bankName: '',
      ifscCode: 0,
      branchCode: 0,
      branchAddress: ''
    },
    guarantorDetails: {
      guarantorId: 0,
      guarantorName: '',
      guarantorPanCardNumber: '',
      relation: '',
      mobileNumber: 0,
      occupation: ''
    },
    previousLoanDetails: {
      previousLoanId: 0,
      loanAmount: 0,
      loanTenure: 0,
      paidAmount: 0,
      remainingAmount: 0,
      defaulterCount: 0,
      bankName: ''
    },
    customerLoanDetails: {
      loanId: 0,
      expectedLoanAmount: 0,
      expectedLoanTenure: 0,
      expectedEmiAmount: 0,
      loanStatus: '',
      loanDisbursedStatus: ''
    },
    
    customerDocuments: new CustomerDocuments
  }

  saveCustomer(c:any) 
  {
   return this.http.post("http://localhost:9090/customerapi/application",c,{responseType:'text' as 'json'});
   
  }

  getCustomers()
  {
    return this.http.get<CustomerApplicationForm[]>("http://localhost:9090/customerapi/applications/");
  }

  getCustomer(applicationId: number) {
    return this.http.get<CustomerApplicationForm>("http://localhost:9090/customerapi/applications/"+applicationId);
  }

  deleteCustomer(applicationId:number)
  {
    return this.http.delete("http://localhost:9090/customerapi/application/"+applicationId);
  }

  updateCustomer(c:any)
  {
    return this.http.put("http://localhost:9090/customerapi/application/"+c.applicationId,c,{responseType:'text' as 'json'})
  }
}
