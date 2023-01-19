import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EnquiryService } from 'src/app/shared/enquiry.service';

@Component({
  selector: 'app-register-enquiry',
  templateUrl: './register-enquiry.component.html',
  styleUrls: ['./register-enquiry.component.css']
})
export class RegisterEnquiryComponent {

  steps: any = 1;

  enquiryForm: FormGroup;


  constructor(private _fb: FormBuilder, public cs: EnquiryService) { }

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
      enquiryStatus: [''],
      registrationStatus: [''],
      cibilscore:this._fb.group({
      cibilRemark: ['']
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

}
