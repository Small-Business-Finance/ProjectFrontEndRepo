
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerApplicationForm } from 'src/app/classes/customer-application-form';
import { CustomerapplicationService } from 'src/app/shared/customerapplication.service';
import { EnquiryService } from 'src/app/shared/enquiry.service';

@Component({
  selector: 'app-apply-for-loan',
  templateUrl: './apply-for-loan.component.html',
  styleUrls: ['./apply-for-loan.component.css']
})
export class ApplyForLoanComponent {
  steps: any = 1;
  enquiryForm: FormGroup;
  showData=false;

  customer:CustomerApplicationForm;
  id:number=4;


  constructor(private _fb: FormBuilder, public cs: EnquiryService,public api:CustomerapplicationService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.enquiryForm = this._fb.group({
      enquiryId: [],
      customerName: [''],
      companyName: [''],
      typesOfBusiness: [''],
      customerAddress: [''],
      customerPancardNumber: [''],
      companyPancardNumber: [''],
      mobileNumber: [''],
      alternateMobileNumber: [''],
      emailId: [''],
      itrStatus: [''],
      enquiryStatus: ['Pending'],
      registrationStatus: ['Not Registered'],
      cibilscore: this._fb.group({
        cibilRemark: ['Not Generated']
      })
    })
  }

  submit() {
    this.steps = this.steps + 1;

  }

  previous() {
    this.steps = this.steps - 1;
  }

  clickreg() {
    this.cs.postEnquiry(this.enquiryForm.value).subscribe();
  }

  login()
  {
    this.api.getCustomer(this.id).subscribe((data:CustomerApplicationForm)=>{
            this.customer=data;
            this.showData=true;
          console.log(data);
          },

          (error:HttpErrorResponse)=>{
            //alert(error.message);
            alert("Id not found, Please enter correct Id")
          }
          
          );
          
       }
       
      }
