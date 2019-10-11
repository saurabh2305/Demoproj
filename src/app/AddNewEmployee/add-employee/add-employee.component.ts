import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor() { }

  EmployeName: string;
  EmployeAge: number;
  EmployeeAdress: string;
  EmployeeSalary: number;


  ngOnInit() {
  }

  SaveEmployee() : void
  {
    
    console.log(this.EmployeName);
    console.log(this.EmployeAge);
    console.log(this.EmployeeAdress);
    console.log(this.EmployeeSalary);
  }

}
