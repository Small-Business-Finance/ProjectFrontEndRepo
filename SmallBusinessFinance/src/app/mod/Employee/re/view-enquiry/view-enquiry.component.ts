import { Component } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { Enquiry } from 'src/app/classes/enquiry';
import { EnquiryService } from 'src/app/shared/enquiry.service';
@Component({
  selector: 'app-view-enquiry',
  templateUrl: './view-enquiry.component.html',
  styleUrls: ['./view-enquiry.component.css']
})
export class ViewEnquiryComponent {

  constructor(private cs:EnquiryService){}
  p: number = 1;
  // collection: any[];
  allenquiries:Enquiry[];
  ngOnInit(){
this.cs.getEnquiryList().subscribe((elist:Enquiry[])=>{
this.allenquiries=elist;
})
  }
}
