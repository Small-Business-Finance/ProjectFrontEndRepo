import { Component } from '@angular/core';
import { Employee } from 'src/app/classes/employee';
import { LeaveDetails } from 'src/app/classes/leave-details';
import { EmployeeService } from 'src/app/shared/employee.service';
import { LeaveApplicationService } from 'src/app/shared/leave-application.service';

@Component({
  selector: 'app-bm-personal',
  templateUrl: './bm-personal.component.html',
  styleUrls: ['./bm-personal.component.css']
})
export class BmPersonalComponent {

  constructor(private cs:LeaveApplicationService,public api:EmployeeService) {}

  employee:Employee;

   leave:LeaveDetails[];
  id:number;

  ngOnInit(){

    this.employee = JSON.parse(sessionStorage.getItem('employee'));
    this.id=this.employee.empId;
    this.cs.getById(this.id).subscribe((

      data:LeaveDetails[])=>
      {
          this.leave=data;

      }
    )
    
    // this.api.getAllEmployees().subscribe((
    //   employee:Employee[])=>
    //   {
    //     console.log(employee);
    //   this.e=employee;
    // })
    
  }

}
