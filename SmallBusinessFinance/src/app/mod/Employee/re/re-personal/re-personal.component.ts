import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeaveDetails } from 'src/app/classes/leave-details';
import { LeaveApplicationService } from 'src/app/shared/leave-application.service';

@Component({
  selector: 'app-re-personal',
  templateUrl: './re-personal.component.html',
  styleUrls: ['./re-personal.component.css']
})
export class RePersonalComponent {

  constructor(private cs:LeaveApplicationService) {}

   leave:LeaveDetails[];
  leaveobj:LeaveDetails;
  id:number=2345;

  ngOnInit(){

    this.cs.getById(this.id).subscribe((

      data:LeaveDetails[])=>
      {
          this.leave=data;

      }
    )
    
    
  }

}
