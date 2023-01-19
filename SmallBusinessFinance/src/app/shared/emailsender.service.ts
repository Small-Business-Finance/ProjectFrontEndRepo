import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailSender } from '../classes/email-sender';

@Injectable({
  providedIn: 'root'
})
export class EmailsenderService {

  constructor(private http:HttpClient) { }
  email:EmailSender={
    toEmail: '',
    fromEmail: '',
    subject: '',
    message: ''
  }
  submitContact()
  {
    
  }
}
