import { Component, OnInit, Input } from '@angular/core';
import { User } from '../model/user';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {

  @Input() id: string;
  empDetailId: number;
  userArray: User[] = [];

  constructor(private _route: ActivatedRoute, private _employeeServiceObj: EmployeeService) { }

  ngOnInit() {
    this._route
    .params
    .subscribe(params => {
      this.empDetailId = + params['empID'];
    });

    this._employeeServiceObj.getEmpData().subscribe((data) => {
      debugger
      for (let key in data) {
        if (this.empDetailId == data[key].id) {
          this.userArray.push(data[key]);
        }
      }
    });
  }

  private GetEmployeeDetails(id: number) {
    this.empDetailId = id;
  }

}
