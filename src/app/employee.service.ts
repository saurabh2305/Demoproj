import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  public getEmpData():Observable<User[]>{
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/albums'); 
  }
}
