import { Component } from '@angular/core';
import { CustomerApplicationForm } from 'src/app/classes/customer-application-form';
import { CustomerapplicationService } from 'src/app/shared/customerapplication.service';

@Component({
  selector: 'app-view-customer-application',
  templateUrl: './view-customer-application.component.html',
  styleUrls: ['./view-customer-application.component.css']
})
export class ViewCustomerApplicationComponent {

  constructor(public cs:CustomerapplicationService){}

  cf:CustomerApplicationForm[];

  ngOnInit()
  {
    this.cs.getCustomer().subscribe((clist:CustomerApplicationForm[])=>{
  
      this.cf=clist;
     })
  }

  deleteCustomer(c:number)
  {
    this.cs.deleteCustomer(c).subscribe();
  }
}
