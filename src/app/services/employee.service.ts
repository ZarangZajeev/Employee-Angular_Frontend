import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl:string="http://127.0.0.1:8000/api/employee/"
  
  constructor(private http:HttpClient) { }

  // service for listing all employees
  getEmployees(){
    return this.http.get(this.baseUrl)
  }

  // service for retrieve employess
  retrieveEmployee(id:number){
    return this.http.get(`${this.baseUrl}${id}/`)
  }

  // service for create a employee
  createEmployee(data:any){
    return this.http.post(this.baseUrl,data)
  }

  // service for update a employee
  updateEmployee(id:number, data:any){
    return this.http.put(`${this.baseUrl}${id}`,data)
  }

  // service for delete employee
  removeEmployee(id:number){
    return this.http.delete(`${this.baseUrl}${id}`)
  }
}