import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { FormGroup,FormControl,Validators } from '@angular/forms'

@Component({
  selector: 'app-employeecreate',
  templateUrl: './employeecreate.component.html',
  styleUrls: ['./employeecreate.component.css']
})
export class EmployeecreateComponent implements OnInit{
  isEdit:boolean=false;
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
    if(this.isEdit){
      // update service
    }
    else{
      // create service
      let data=this.employeeForm.value;
      this.service.createEmployee(data).subscribe(data=>console.log(data))
      this.employeeForm.reset()  
    }
  }

  ngOnInit(){
    this.service.emitEmployeeId.subscribe((id:any)=>{
      this.isEdit=true
      this.service.retrieveEmployee(id).subscribe(data=>this.employeeForm.patchValue(data))
    })
  }

}
