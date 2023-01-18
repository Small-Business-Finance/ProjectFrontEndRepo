import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerApplicationForm } from 'src/app/classes/customer-application-form';
import { CustomerapplicationService } from 'src/app/shared/customerapplication.service';

@Component({
  selector: 'app-view-customer-full-details',
  templateUrl: './view-customer-full-details.component.html',
  styleUrls: ['./view-customer-full-details.component.css']
})
export class ViewCustomerFullDetailsComponent {

  constructor(private routs:ActivatedRoute,private cs:CustomerapplicationService) { }
  customerobj:CustomerApplicationForm;
  ngOnInit(): void 
  {
  
  this.routs.paramMap.subscribe(param1=>
    {
      this.cs.getCustomer(parseInt(param1.get('applicationId'))).subscribe(
        data=>
        {
          this.customerobj=data
        }
      )
    }
    )
  }
}
