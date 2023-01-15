import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent {

 

  constructor(public cs:EmployeeService,private fb:FormBuilder){}
  regEmployee:FormGroup;
  ngOnInit()
  {
    this.regEmployee=this.fb.group({
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
  }

  saveemployee()
  {
    this.cs.saveemployee(this.regEmployee.value).subscribe();
    
  }

  reset()
  {
    this.regEmployee.reset()
  }
}
