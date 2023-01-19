import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sanction-letter',
  templateUrl: './sanction-letter.component.html',
  styleUrls: ['./sanction-letter.component.css']
})
export class SanctionLetterComponent {

  constructor(private fb:FormBuilder){}

  sanctionForm:FormGroup

  ngOnInit()
  {
    this.sanctionForm=this.fb.group({
      sanctionedLoanId:[],
      applicationId:[],
      customerName:[''],
      sanctionedLoanAmount:[],
      interestRate:[],
      sanctionedTenure:[],
      emiAmount:[]
    })

  }

  generate()
  {
    
  }
}
