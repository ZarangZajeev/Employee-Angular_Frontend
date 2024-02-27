import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  employees:any

  constructor(private service:EmployeeService){
  }
  ngOnInit(){
    this.service.getEmployees().subscribe(data=>this.employees=data)
    this.service.reloadRequired.subscribe(data=>this.ngOnInit())
  }

  destroyEmployee(id:number){
    this.service.removeEmployee(id).subscribe(data=>this.ngOnInit())
  }

  editEmployee(id:number){
    this.service.dispatchEmployeeId(id)
  }
}
