import { Component } from '@angular/core';
import { CustomerApplicationForm } from 'src/app/classes/customer-application-form';
import { LoanService } from 'src/app/shared/loan.service';

@Component({
  selector: 'app-defaulter-list',
  templateUrl: './defaulter-list.component.html',
  styleUrls: ['./defaulter-list.component.css']
})
export class DefaulterListComponent {

  constructor(public ls:LoanService){}
  custappform:CustomerApplicationForm[];

  ngOnInit()
  {
      this.ls.getDefaulterList().subscribe((data:CustomerApplicationForm[])=>{
        this.custappform=data;
      });
  }
}
