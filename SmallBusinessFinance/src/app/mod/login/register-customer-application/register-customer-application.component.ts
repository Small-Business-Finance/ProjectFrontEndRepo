import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerapplicationService } from 'src/app/shared/customerapplication.service';

@Component({
  selector: 'app-register-customer-application',
  templateUrl: './register-customer-application.component.html',
  styleUrls: ['./register-customer-application.component.css']
})
export class RegisterCustomerApplicationComponent {

  steps:any=1;

  // registerForm:FormGroup;
  // caf:CustomerApplicationForm;

  constructor(private _fb:FormBuilder,public cs:CustomerapplicationService){}
  
  ngOnInit()
  {
  //    this.registerForm=this._fb.group({
  //       applicationId:[],
  //       applicationStatus:[''],

  //       customerDetails:this._fb.control({

  //       }),

  //       customerContactInfo:this._fb.control({

  //       }),
       
  //      customerCompanyDetails:this._fb.control({

  //      }),
  //      customerBankDetails:this._fb.control({

  //      }),
  //      guarantorDetails:this._fb.control({

  //      }),
  //      previousLoanDetails:({

  //      }),
  //      customerLoanDetails:({

  //      })

  //     })
  //     }
       
  //   submit()
  //   {
  //     this.steps=this.steps+1;
    
  //   }
  
  // previous()
  // {
  //   this.steps=this.steps-1;
  // }

  // clickreg()
  // {
  //   this.cs.saveCustomer(this.registerForm.value).subscribe();
  
  // }

}
}
