import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { Enquiry } from 'src/app/classes/enquiry';
import { EnquiryService } from 'src/app/shared/enquiry.service';
@Component({
  selector: 'app-view-enquiry',
  templateUrl: './view-enquiry.component.html',
  styleUrls: ['./view-enquiry.component.css']
})
export class ViewEnquiryComponent {
  currentRoute: string;

  constructor(private cs:EnquiryService,public rr:Router){
    console.log(rr.url);
    this.currentRoute=rr.url;
  }
  p: number = 1;
 allenquiries:Enquiry[];
  ngOnInit(){
  this.cs.getEnquiryList().subscribe((elist:Enquiry[])=>{
  this.allenquiries=elist;
})
  }
  generate(id:number){
    console.log(id);
    let abc=this.cs.generateCibilScore(id).subscribe();
    console.log(abc);
    window.location.reload();
  }
}
