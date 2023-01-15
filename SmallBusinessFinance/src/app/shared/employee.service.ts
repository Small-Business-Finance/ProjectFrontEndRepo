import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../classes/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  emp:Employee={
    empId:0,
    empName:'',
    empDateofBirth:'',
    empGender:'',
    empSalary:0,
    empRole:'',
    empAddress:'',
    empMobileno:0,
    empEmailId:'',
    username:'',
    password:'',
   
  }

  saveemployee(e:Employee)
  {
    return this.http.post("http://localhost:9090/employeeapi/saveemployee",e)
  }

  getAllEmployees()
  {
    return this.http.get<Employee[]>("http://localhost:9090/employeeapi/getallemp")
  }

  updateEmployee(e:Employee)
  {
    return this.http.put("http://localhost:9090/employeeapi/employee/{empId}"+e.empId,e)
  }

  deleteEmployee(empId:number)
  {
    return this.http.delete("http://localhost:9090/employeeapi/employee/"+empId)
  }
}
