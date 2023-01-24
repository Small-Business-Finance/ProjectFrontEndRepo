import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EnquiryService } from 'src/app/shared/enquiry.service';

@Component({
  selector: 'app-register-enquiry',
  templateUrl: './register-enquiry.component.html',
  styleUrls: ['./register-enquiry.component.css']
})
export class RegisterEnquiryComponent {

  steps: any = 1;

  enquiryForm: FormGroup;


  constructor(private _fb: FormBuilder, public cs: EnquiryService,public router:Router) { }

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
      cibilscore:this._fb.group({
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
    this.router.navigate(['reprofile/viewenquiry'])
  }

}
