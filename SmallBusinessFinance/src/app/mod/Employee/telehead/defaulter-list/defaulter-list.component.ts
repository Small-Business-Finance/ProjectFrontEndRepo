import { Component } from '@angular/core';
import { CustomerApplicationForm } from 'src/app/classes/customer-application-form';
import { EmailsendingService } from 'src/app/shared/emailsending.service';
import { LoanService } from 'src/app/shared/loan.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-defaulter-list',
  templateUrl: './defaulter-list.component.html',
  styleUrls: ['./defaulter-list.component.css']
})
export class DefaulterListComponent {

  constructor(public ls:LoanService,public es:EmailsendingService){}
  custappform:CustomerApplicationForm[];

  ngOnInit()
  {
      this.ls.getDefaulterList().subscribe((data:CustomerApplicationForm[])=>{
        this.custappform=data;
      });
  }

  notice(e:any)
  {
    this.es.sendMultipleEmail(e).subscribe();
    Swal.fire("Notice Sent",' ','success')
  }
}
