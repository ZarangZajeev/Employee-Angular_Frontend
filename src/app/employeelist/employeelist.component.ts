import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent {
  employees:any

  constructor(private service:EmployeeService){
    this.service.getEmployees().subscribe(data=>this.employees=data)
  }
  
}
