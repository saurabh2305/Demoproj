import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  title = 'Employee Details';
  listPage: boolean;
  pageOfItems: Array<any>=[];
  config: any;

  employeeListLoaded: string = "Yes";
  @Output()
  employeeListLoadedEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  userArray: User[] = [];
  id: string;

  constructor(private employeeServiceObj: EmployeeService, private activatedRoute: ActivatedRoute, private route: Router) { 
   

   

/*for (let i = 1; i <= 100; i++) {
this.pageOfItems.push(`item ${i}`);
}*/
  }

  ngOnInit() {

    this.activatedRoute
      .params
      .subscribe(params => {
        this.listPage = params['isListPage'];
        console.log(this.listPage);
      });

    this.employeeServiceObj.getEmpData().subscribe((data) => {
      for (let key in data) {
        this.userArray.push(data[key]);
      }
    });

    //this.sendMessageToParent("Yes");

    this.OnEmployeeListLoad();

  }

  pageChange(event){
    this.config.currentPage = event;
  }


  sendMessageToParent(message: string) {
    //this.messageToEmit.emit(message)
  }


  NavigteEmployeeDetails(): void {
    this.route.navigate(['./ShowEmployeeDetails']);
  }

  EditEmployee(userid: string): void {
    debugger
    this.id = userid;
    this.route.navigate(['./ShowEmployeeDetails', this.id]);
  }

  OnEmployeeListLoad() {
    this.employeeListLoaded = "Yes Ganraj";
    debugger
    this.employeeListLoadedEvent.emit(true);
  }


  funEventFire(){
    this.employeeListLoadedEvent.emit(true);
  }
}
