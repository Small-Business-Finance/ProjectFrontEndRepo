import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LeaveApplicationService } from 'src/app/shared/leave-application.service';

@Component({
  selector: 'app-register-leave-application',
  templateUrl: './register-leave-application.component.html',
  styleUrls: ['./register-leave-application.component.css']
})
export class RegisterLeaveApplicationComponent {

  leaveForm: FormGroup;

  constructor(private _fb: FormBuilder, public cs: LeaveApplicationService) { }

  ngOnInit() {
    this.leaveForm = this._fb.group({
      leaveAppId: [],
      empId: [],
      fromDate: [''],
      toDate: [''],
      leaveType: [''],
      leaveappstatus: ['']
    })
  }
  leaveSubmit() {
    this.cs.postLeave(this.leaveForm.value).subscribe();
  }
}
