import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailSender } from 'src/app/classes/email-sender';
import { EmailsendingService } from 'src/app/shared/emailsending.service';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})


export class ContactUsComponent implements OnInit {
  

  emailsender: FormGroup;

  constructor(private _fb: FormBuilder, private cs: EmailsendingService) { }
  sss:EmailSender={
    toEmail: '',
    subject: '',
    message: ''
  }
  ngOnInit(): void {
    
      // this.emailsender = this._fb.group({
      // emailid: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      // fullname: new FormControl('', [Validators.required]),
      // phonenumber: new FormControl('', [Validators.required]),
      // query: new FormControl('', [Validators.required])
      // })
  
      this.emailsender=this._fb.group({
        fromemailid:[''],
        emailid: [''],
        fullname:[''],
        phonenumber:[''],
        query:['']
      })
    }

    onSubmit() {
    
this.sss.toEmail=this.emailsender.controls['emailid'].value;
this.sss.subject="Query From About Section";
this.sss.message="Hello "+this.emailsender.controls['fullname'].value+" , We have received your query("
+this.emailsender.controls['query'].value+"). Our Executive will call you on provided mobile number "
+this.emailsender.controls['phonenumber'].value+" Thank You.";
console.log(this.sss);
      this.cs.postQuery(this.sss).subscribe();
  }
     
  }

