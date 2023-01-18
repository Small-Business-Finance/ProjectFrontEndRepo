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

  constructor(public ldt:LeaveApplicationService){}
  l:LeaveDetails[];
  // editLeave:FormGroup;
  
  ngOnInit()
  {
    this.ldt.getAllLeavedetails().subscribe((leavedetails:LeaveDetails[])=>{
  
      this.l=leavedetails;
     })
  }
  
}
