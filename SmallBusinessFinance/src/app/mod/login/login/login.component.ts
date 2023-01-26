import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/classes/employee';
import { EmployeeService } from 'src/app/shared/employee.service';

export interface user {
  username: string;
  password: string;

}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  noticeMessage1 = "1. All employees are required to attend a meeting at 2pm in the conference room.";
  noticeMessage2= "2. There will be a company-wide meeting on Friday at 10am in the main conference room. All employees are required to attend.";

  noticeMessage3="3. The office will be closed on Monday for a national holiday. We will resume normal business hours on Tuesday.";

  noticeMessage4="4. A reminder that all employees are required to complete their annual performance reviews by the end of the month. Please schedule a meeting with your manager to discuss your progress.";
  noticeMessage5="5. The company's annual retreat will take place next month. More information and sign-up details will be provided next week.";
  
  u: user = {
    username: "",
    password: "",
  
  };
  constructor(private router: Router,private es:EmployeeService) {}
  username: string='';
  password:string='';

  ngOnInit() {}
employee:Employee;

  login(u) 
  {
    console.log("login called");
    console.log(u.username,u.password);
    this.es.getEmployeeUnP(u.username,u.password).subscribe((data:Employee)=>{
      this.employee=data;
      
      if(this.employee.empRole =='bm'){
        this.router.navigateByUrl("bmprofile/viewCustomer");
      }
      if(this.employee.empRole =='re'){
        this.router.navigateByUrl("reprofile/viewenquiry");
      }
      if(this.employee.empRole =='fh'){
        this.router.navigateByUrl("fhprofile/viewCustomer");
      }
      if(this.employee.empRole =='th'){
        this.router.navigateByUrl("thprofile/defaulter");
      }
      if(this.employee.empRole =='oe'){
        this.router.navigateByUrl("/oeprofile/viewenquiry");
      }
      if(this.employee.empRole =='ca'){
        this.router.navigateByUrl("caprofile/viewCustomer");
      }
      
    }, (error:HttpErrorResponse)=>{
      if (u.username === 'admin' && u.password === 'admin') {
        this.router.navigateByUrl("viewemployee");
      }
      else{
      alert("Username or Password is not correct!!")
    }}
    
    );
    
   
  }
  //  if (u.username === 're' && u.password === 're') {
  //     console.log(u.username,u.password);
  //     this.router.navigateByUrl("reprofile/viewenquiry");
  //   }

  //   if (u.username === 'oe' && u.password === 'oe') {
  //     this.router.navigateByUrl("/oeprofile/viewenquiry");
  //   }

  //   if (u.username === 'bm' && u.password === 'bm') {
  //     this.router.navigateByUrl();
  //   }

  //   if (u.username === 'fh' && u.password === 'fh') {
  //     this.router.navigateByUrl("fhprofile/viewCustomer");
  //   }

  //   if (u.username === 'th' && u.password === 'th') {
  //     this.router.navigateByUrl("thprofile/defaulter");
  //   }

  //   if (u.username === 'ca' && u.password === 'ca') {
  //     this.router.navigateByUrl("caprofile/viewCustomer");
  //   }

  //   if (u.username === 'admin' && u.password === 'admin') {
  //     this.router.navigateByUrl("viewemployee");
  //   }

    

}
