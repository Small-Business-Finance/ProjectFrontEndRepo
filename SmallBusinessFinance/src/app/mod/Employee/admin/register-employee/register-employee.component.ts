import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { Router } from '@angular/router';

import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent {

 

  constructor(public cs:EmployeeService,private fb:FormBuilder,private router:Router){}
  alert:boolean=false
  regEmployee:FormGroup;
  ngOnInit()
  {
    this.regEmployee=this.fb.group({
    empId:[],
    empName:['',[Validators.required]],
    empDateofBirth:['',[Validators.required]],
    empGender:['',[Validators.required]],
    empSalary:['',[Validators.required]],
    empRole:['',[Validators.required]],
    empAddress:['',[Validators.required]],
    empMobileno:['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[789][0-9]{9}$")]],
    empEmailId:[''],
    username:['',[Validators.required]],
    password:['',[Validators.required]]
    })
    // this.regEmployee=this.fb.group({
    //   empId:[],
    //   empName:[''],
    //   empDateofBirth:[''],
    //   empGender:[''],
    //   empSalary:[''],
    //   empRole:[''],
    //   empAddress:[''],
    //   empMobileno:[''],
    //   empEmailId:[''],
    //   username:[''],
    //   password:['']
    //   })
  }

  get k() { return this.regEmployee.controls; }
  saveemployee()
  {
    this.cs.saveemployee(this.regEmployee.value).subscribe((result)=>{
      this.alert=true
    });
   // this.router.navigate(['admin/viewemployee'])
    
  }
  closeAlert(){
    this.alert=false
  }

  reset()
  {
    this.regEmployee.reset()
  }
}
