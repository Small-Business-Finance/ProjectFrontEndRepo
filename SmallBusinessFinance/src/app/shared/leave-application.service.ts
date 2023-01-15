import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeaveDetails } from '../classes/leave-details';

@Injectable({
  providedIn: 'root'
})
export class LeaveApplicationService {

  constructor(private http:HttpClient) { }

  postLeave(pl:LeaveDetails): Observable<LeaveDetails>
  {
    return this.http.post<LeaveDetails>("http://localhost:9090/leaveapi/leavedetail",pl);
  }
}
