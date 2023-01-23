import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/classes/employee';
import { LeaveDetails } from 'src/app/classes/leave-details';
import { EmployeeService } from 'src/app/shared/employee.service';
import { LeaveApplicationService } from 'src/app/shared/leave-application.service';

@Component({
  selector: 'app-re-personal',
  templateUrl: './re-personal.component.html',
  styleUrls: ['./re-personal.component.css']
})
export class RePersonalComponent {

  constructor(private cs:LeaveApplicationService,public api:EmployeeService) {}

  e:Employee[];

   leave:LeaveDetails[];
  id:number=2345;

  ngOnInit(){

    this.cs.getById(this.id).subscribe((

      data:LeaveDetails[])=>
      {
          this.leave=data;

      }
    )
    
    this.api.getAllEmployees().subscribe((
      employee:Employee[])=>
      {
        console.log(employee);
      this.e=employee;
    })
    
  }

}
