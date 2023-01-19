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

  constructor(private _fb: FormBuilder, public cs: EmailsendingService) { }
  
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
      this.cs.postQuery(this.emailsender.value).subscribe();
  }
     
  }

