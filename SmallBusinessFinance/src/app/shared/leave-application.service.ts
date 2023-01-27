import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeaveDetails } from '../classes/leave-details';

@Injectable({
  providedIn: 'root'
})
export class LeaveApplicationService {

  constructor(private http:HttpClient) { }

  leave:LeaveDetails={
    leaveAppId: 0,
    empId: 0,
    fromDate: '',
    toDate: '',
    leaveType: '',
    leaveappstatus: ''
  }

  postLeave(pl:LeaveDetails): Observable<LeaveDetails>
  {
    return this.http.post<LeaveDetails>("http://localhost:9090/leaveapi/leavedetail",pl);
  }
  
  getAllLeavedetails()
  {
    return this.http.get("http://localhost:9090/leaveapi/getallleavedetail");
  }

  updateLeave(l:LeaveDetails)
  {
    alert(l.leaveappstatus)
    return this.http.put("http://localhost:9090/leaveapi/leavedetail/"+l.leaveAppId,l);
  }

  deleteLeavedetails(leaveAppId:number)
  {
    return this.http.delete("http://localhost:9090/leaveapi//leavedetail/"+leaveAppId)
  }
  
  getById(leaveAppId:number) 
  {
    return this.http.get<LeaveDetails[]>("http://localhost:9090/leaveapi/getbyId/"+leaveAppId);
  }
}
