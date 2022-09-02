import { Component } from '@angular/core';
import {EmployeeService} from './../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers:[EmployeeService]
})
export class EmployeeComponent  {

  selectedFilter: string = 'All';
  employees:any[];

  constructor(private _employeeService:EmployeeService){
   this.employees=_employeeService.getAllEmployee();
  }
 
  getAllEmployeeCount():number{
   return this.employees.length;
  }

  getMaleEmployeeCount():number{
    return this.employees.filter(emp=>emp.gender==='Male').length;
   }

   getFemaleEmployeeCount():number{
    return this.employees.filter(emp=>emp.gender==='Female').length;
   }

   onSelectionChangeDropDown(valuefromEmitter: string): void {
    this.selectedFilter = valuefromEmitter; //we are setting the data that is coming from child component......
}
  

}
