import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { EmailSender } from '../classes/email-sender';


@Injectable({
  providedIn: 'root'
})
export class EmailsendingService {
 
  constructor(private http:HttpClient) { }

  
  
  postQuery(input: any) {
    return this.http.post('http://localhost:9090/emailsenderapi/emailsend', input, { responseType:  'text' as 'json'})
    
  }

  sendSanctionEmail(s:any)
  {
    return this.http.post("http://localhost:9090/emailsenderapi/sanction",s);
  }

  

  
}
