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
      this.router.navigateByUrl("reprofile");
    }

    if (u.username === 'oe' && u.password === 'oe') {
      this.router.navigateByUrl("/oeprofile");
    }

    if (u.username === 'bm' && u.password === 'bm') {
      this.router.navigateByUrl("bmprofile");
    }

    if (u.username === 'fh' && u.password === 'fh') {
      this.router.navigateByUrl("fhprofile");
    }

    if (u.username === 'th' && u.password === 'th') {
      this.router.navigateByUrl("thprofile");
    }

    if (u.username === 'ca' && u.password === 'ca') {
      this.router.navigateByUrl("caprofile");
    }

    if (u.username === 'admin' && u.password === 'admin') {
      this.router.navigateByUrl("viewemployee");
    }

    
  }
}
