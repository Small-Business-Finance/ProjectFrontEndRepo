import { CustomerBankDetails } from "./customer-bank-details"
import { CustomerCompanyDetails } from "./customer-company-details"
import { CustomerDetails } from "./customer-details"
import { CustomerDocuments } from "./customer-documents"
import { CustomerLoanDetails } from "./customer-loan-details"
import { GuarantorDetails } from "./guarantor-details"
import { PreviousLoanDetails } from "./previous-loan-details"

export class CustomerApplicationForm {

     applicationId:number
	applicationStatus:string
     
     customerDetails:CustomerDetails
     customerCompanyDetails:CustomerCompanyDetails
     customerBankDetails:CustomerBankDetails
     guarantorDetails:GuarantorDetails
     previousLoanDetails:PreviousLoanDetails
     customerLoanDetails:CustomerLoanDetails
     customerDocuments:CustomerDocuments
}
