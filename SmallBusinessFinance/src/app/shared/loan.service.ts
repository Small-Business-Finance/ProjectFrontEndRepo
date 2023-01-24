import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerApplicationForm } from '../classes/customer-application-form';
import { CustomerLoanDetails } from '../classes/customer-loan-details';
import { EmiTable } from '../classes/emi-table';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  getEMIdetailList() {
    return this.http.get<CustomerApplicationForm[]>("http://localhost:9090/enquiryapi/enquiries");
  }
  
  constructor(private http:HttpClient) { }

  saveemi(applicationId: number) {
    console.log(1);
   return this.http.put("http://localhost:9090/loanapi123/application/"+applicationId,applicationId);
  }

  getDefaulterList()
  {
    return this.http.get<CustomerApplicationForm[]>("http://localhost:9090/loanapi123/defaulterlist");
  }

  updateemi(e:EmiTable)
  {
    return this.http.put("http://localhost:9090/loanapi123/updateemi",e);
  }

}
