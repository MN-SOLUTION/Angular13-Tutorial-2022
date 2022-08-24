import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent  {

  employees:any[]=[
  {id:101,name:"Ali",salary:5000,gender:'Male'},
  {id:121,name:"Ahmed",salary:6000,gender:'Male'},
  {id:142,name:"Sana",salary:7000,gender:'Female'},
  {id:131,name:"Salman",salary:7000,gender:'Male'},
  {id:151,name:"Fatima",salary:3000,gender:'Female'},
  {id:151,name:"Fahad",salary:3000,gender:'Male'}
  ];
 
  getAllEmployeeCount():number{
   return this.employees.length;
  }

  getMaleEmployeeCount():number{
    return this.employees.filter(emp=>emp.gender==='Male').length;
   }

   getFemaleEmployeeCount():number{
    return this.employees.filter(emp=>emp.gender==='Female').length;
   }



}
