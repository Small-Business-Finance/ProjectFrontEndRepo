import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      enquiryId: ['', [Validators.required]],
      customerName: ['', [Validators.required]],
      companyName: ['', [Validators.required]],
      typesOfBusiness: ['', [Validators.required]],
      customerAddress: ['', [Validators.required]],
      customerPancardNumber: ['', [Validators.required,Validators.pattern("^([A-Z]{5}[0-9]{4}[A-Z]{1})$")]],
      companyPancardNumber: ['', [Validators.required,Validators.pattern("^([A-Z]{5}[0-9]{4}[A-Z]{1})$")]],
      mobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[789][0-9]{9}$")]],
      alternateMobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[789][0-9]{9}$")]],
      emailId: ['', [Validators.required]],
      itrStatus: ['', [Validators.required]],
      enquiryStatus: ['Pending', [Validators.required]],
      registrationStatus: ['Not Registered', [Validators.required]],
      cibilscore:this._fb.group({
      cibilRemark: ['Not Generated', [Validators.required]]
    })
    })
  }

  get f() { return this.enquiryForm.controls; }
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
