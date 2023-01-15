import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {
  editEmployee:FormGroup;

  constructor(public cs:EmployeeService,private fb:FormBuilder,private location:Location,private routes:Router){}

  ngOnInit()
  {
    this.editEmployee=this.fb.group({
      empId:[],
      empName:[''],
      empDateofBirth:[''],
      empGender:[''],
      empSalary:[],
      empRole:[''],
      empAddress:[''],
      empMobileno:[],
      empEmailId:[''],
      username:[''],
      password:['']
      })
      this.editEmployeeInfo();
    }
  
    editEmployeeInfo()
    {
      const e:any=this.location.getState();
      this.editEmployee.get('empName').setValue(e.empName);
      this.editEmployee.get('empDateofBirth').setValue(e.empDateofBirth);
      this.editEmployee.get('empSalary').setValue(e.empSalary);
      this.editEmployee.get('empRole').setValue(e.empRole);
      this.editEmployee.get('empAddress').setValue(e.empAddress);
      this.editEmployee.get('empMobileno').setValue(e.empMobileno);
      this.editEmployee.get('empEmailId').setValue(e.empEmailId);
      this.editEmployee.get('username').setValue(e.username);
      this.editEmployee.get('password').setValue(e.password);
    }
  
    updateEmployee()
    {
      console.log(this.editEmployee.value)
      this.cs.updateEmployee(this.editEmployee.value).subscribe();
      this.routes.navigate(['viewEmployee'])
      
    }
}
