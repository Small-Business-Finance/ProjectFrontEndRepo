import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router) {}
  username: string='';
  password:string='';

  ngOnInit() {}


  login(u) 
  {
    console.log("login called");
    console.log(u.username,u.password);
    
   if (u.username === 're' && u.password === 're') {
      console.log(u.username,u.password);
      this.router.navigateByUrl("reprofile/viewenquiry");
    }

    if (u.username === 'oe' && u.password === 'oe') {
      this.router.navigateByUrl("/oeprofile/viewenquiry");
    }

    if (u.username === 'bm' && u.password === 'bm') {
      this.router.navigateByUrl("bmprofile/viewCustomer");
    }

    if (u.username === 'fh' && u.password === 'fh') {
      this.router.navigateByUrl("fhprofile/viewCustomer");
    }

    if (u.username === 'th' && u.password === 'th') {
      this.router.navigateByUrl("thprofile/defaulter");
    }

    if (u.username === 'ca' && u.password === 'ca') {
      this.router.navigateByUrl("caprofile/viewCustomer");
    }

    if (u.username === 'admin' && u.password === 'admin') {
      this.router.navigateByUrl("viewemployee");
    }

    
  }
}
