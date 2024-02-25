import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { FormGroup,FormControl,Validators } from '@angular/forms'

@Component({
  selector: 'app-employeecreate',
  templateUrl: './employeecreate.component.html',
  styleUrls: ['./employeecreate.component.css']
})
export class EmployeecreateComponent {
  constructor(private service:EmployeeService){}

  employeeForm=new FormGroup(
    {
      "name":new FormControl("",Validators.required),
      "department":new FormControl("",Validators.required),
      "salary":new FormControl("",Validators.required),
      "phone":new FormControl("",Validators.required),
      "email":new FormControl("",Validators.required),
    }
  )

  addEmployee(){
    let data=this.employeeForm.value;
    this.service.createEmployee(data).subscribe(data=>console.log(data))
  }
}
