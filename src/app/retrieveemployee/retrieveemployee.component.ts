import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-retrieveemployee',
  templateUrl: './retrieveemployee.component.html',
  styleUrls: ['./retrieveemployee.component.css']
})
export class RetrieveemployeeComponent {
  id:any
  employee:any
  constructor(private rounte:ActivatedRoute, private service:EmployeeService){
    this.id=this.rounte.snapshot.params["id"]

    this.service.retrieveEmployee(this.id).subscribe(data=>this.employee=data)
  }
}
