import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerapplicationService {
  
  constructor(private http:HttpClient) { }

  saveCustomer(value: any) 
  {
    return this.http.post("http://localhost:9090/application",value);
  }

}
