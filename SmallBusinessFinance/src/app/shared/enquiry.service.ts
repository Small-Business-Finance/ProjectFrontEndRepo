import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cibilscore } from '../classes/cibilscore';
import { Enquiry } from '../classes/enquiry';


@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  constructor(private http:HttpClient) { }

  postEnquiry(pe:Enquiry): Observable<Enquiry>
  {
    return this.http.post<Enquiry>("http://localhost:9090/enquiryapi/enquiry",pe);
  }

  postCibilScore(pc:Cibilscore): Observable<Cibilscore>
  {
    return this.http.post<Cibilscore>("http://localhost:9090/enquiryapi/cibilscore",pc);
  }

  putEnquiry(ue:Enquiry):Observable<Enquiry>
  {
    return this.http.put<Enquiry>("http://localhost:9090/enquiryapi/enquiry"+"/"+ue.enquiryId,ue);
  }

  putCibilScore(uc:Cibilscore):Observable<Cibilscore>
  {
    return this.http.put<Cibilscore>("http://localhost:9090/enquiryapi/cibilscore"+"/"+uc.cibilId,uc);
  }

  getEnquiryList(): Observable<Enquiry[]>
  {
    return this.http.get<Enquiry[]>("http://localhost:9090/enquiryapi/enquiries");
  }

  getEnquiryById(enquiryId:number): Observable<Enquiry[]>
  {
    return this.http.get<Enquiry[]>("http://localhost:9090/enquiryapi/enquiry"+"/"+enquiryId);
  }

  getCibilScoreList(): Observable<Cibilscore[]>
  {
    return this.http.get<Cibilscore[]>("http://localhost:9090/enquiryapi/cibilscores");
  }

  getCibilScoreById(cibilId:number): Observable<Cibilscore[]>
  {
    return this.http.get<Cibilscore[]>("http://localhost:9090/enquiryapi/cibilscore"+"/"+cibilId);
  }
  deleteEnquiry(enquiryId:number)
  {
    return this.http.delete("http://localhost:9090/enquiryapi/enquiry"+"/"+enquiryId);
  }
}
