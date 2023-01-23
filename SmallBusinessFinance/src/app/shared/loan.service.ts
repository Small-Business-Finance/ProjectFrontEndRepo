import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerApplicationForm } from '../classes/customer-application-form';
import { CustomerLoanDetails } from '../classes/customer-loan-details';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  
  constructor(private http:HttpClient) { }

  saveemi(applicationId: number) {
    console.log(1);
   return this.http.put("http://localhost:9090/loanapi123/application/"+applicationId,applicationId);
  }

}
