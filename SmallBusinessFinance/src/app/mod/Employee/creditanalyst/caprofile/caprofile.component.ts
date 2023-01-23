import { Component } from '@angular/core';
import { EmailsendingService } from 'src/app/shared/emailsending.service';
import { Location } from '@angular/common';
import { EmailSender } from 'src/app/classes/email-sender';


@Component({
  selector: 'app-caprofile',
  templateUrl: './caprofile.component.html',
  styleUrls: ['./caprofile.component.css']
})
export class CaprofileComponent {

  ee:EmailSender;
constructor(public es:EmailsendingService,public location:Location){}

ngOnInit()
{

}

 
}
