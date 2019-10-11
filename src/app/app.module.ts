import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { CommonComponent } from './common/common.component';
import { EmployeeService } from './employee.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { AddEmployeeComponent } from './AddNewEmployee/add-employee/add-employee.component';


const appRoute: Routes = [
  { path: 'EmployeeList/:isListPage', component: EmpListComponent },
  { path: 'ShowEmployeeDetails/:empID', component: EmpDetailsComponent },
  { path: 'AddEmployeeDetails', component:  AddEmployeeComponent},
  { path: '', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    EmpDetailsComponent,
    EmpListComponent,
    CommonComponent,
    AddEmployeeComponent,  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
