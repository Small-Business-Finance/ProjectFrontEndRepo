import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LeaveApplicationService } from 'src/app/shared/leave-application.service';

@Component({
  selector: 'app-register-leave-application',
  templateUrl: './register-leave-application.component.html',
  styleUrls: ['./register-leave-application.component.css']
})
export class RegisterLeaveApplicationComponent {

  constructor(private _fb: FormBuilder, public cs: LeaveApplicationService) { }
  regLeave: FormGroup;
  ngOnInit() {
    this.regLeave = this._fb.group({
      leaveAppId: [],
      empId: [],
      fromDate: [''],
      toDate: [''],
      leaveType: [''],
      leaveappstatus: ['']
    })
  }
  leaveSubmit() {
    this.cs.postLeave(this.regLeave.value).subscribe();
  }
  reset()
  {
    this.regLeave.reset()
  }
}
