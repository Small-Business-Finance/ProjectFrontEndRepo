import { Component } from '@angular/core';
import { LeaveDetails } from 'src/app/classes/leave-details';
import { LeaveApplicationService } from 'src/app/shared/leave-application.service';

@Component({
  selector: 'app-viewemployeeleave',
  templateUrl: './viewemployeeleave.component.html',
  styleUrls: ['./viewemployeeleave.component.css']
})
export class ViewemployeeleaveComponent {

  leavearray:LeaveDetails[];
  constructor(public cs:LeaveApplicationService){}
ngOnInit(){
  this.cs.getAllLeavedetails().subscribe((data:LeaveDetails[])=>{
    this.leavearray=data;

  })
}
leavestatus:string;
modo(event:string){
  this.leavestatus=event;
}
approval(leave:LeaveDetails){
leave.leaveappstatus=this.leavestatus;
this.cs.updateLeave(leave).subscribe();

}
}
