import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LeaveDetails } from 'src/app/classes/leave-details';
import { LeaveApplicationService } from 'src/app/shared/leave-application.service';

@Component({
  selector: 'app-view-leave-details',
  templateUrl: './view-leave-details.component.html',
  styleUrls: ['./view-leave-details.component.css']
})
export class ViewLeaveDetailsComponent {
  ls="";
  leavestatus="";
  
  constructor(public las:LeaveApplicationService){}
  l:LeaveDetails[];
  p: number = 1;
  ngOnInit()
  {
    this.las.getAllLeavedetails().subscribe((leavedetails:LeaveDetails[])=>{
  
      this.l=leavedetails;
     })
  }
  modo(value: string){
    this.leavestatus=value;
   }
  
  updatestatus(xx:LeaveDetails) {
    xx.leaveappstatus=this.leavestatus;
    console.log(xx.leaveappstatus);
    console.log("hello");
    this.las.updateLeave(xx).subscribe();
    window.location.reload();
  } 
}
