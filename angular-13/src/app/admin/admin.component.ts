import { Component, OnInit } from '@angular/core';
import {EmployeeService} from './../employee.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers:[EmployeeService]
})
export class AdminComponent implements OnInit {

  employees:any[];
  constructor(private _employeeService:EmployeeService) {
    this.employees=_employeeService.getAllEmployee();
   }

  ngOnInit(): void {
  }

}
