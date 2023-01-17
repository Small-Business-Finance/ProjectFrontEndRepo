import { Component } from '@angular/core';
import { Employee } from 'src/app/classes/employee';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent {

  cp:number=1;
  empName:any;

  constructor(public cs:EmployeeService){}

  e:Employee[];

  ngOnInit()
  {
    this.cs.getAllEmployees().subscribe((employee:Employee[])=>{
  
      this.e=employee;
     })
  }

  // deleteEmployee(empId:number)
  // {
  //   this.cs.deleteEmployee(empId).subscribe();
  //   window.location.reload();
  // }

  // Search()
  // {
  //   if(this.empName=='')
  //   {
  //     this.ngOnInit();
  //   }
  //   else{
  //     this.e=this.e.filter(res=>{
  //       return res.empName.toLocaleLowerCase().match(this.empName.toLocaleLowerCase());
  //     });
  //   }
  // }
}
