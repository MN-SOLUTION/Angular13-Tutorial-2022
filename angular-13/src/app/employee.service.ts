import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  getAllEmployee():any[]{
    return [
      {id:101,name:"Ali",salary:5000,gender:'Male'},
      {id:121,name:"Ahmed",salary:6000,gender:'Male'},
      {id:142,name:"Sana",salary:7000,gender:'Female'},
      {id:131,name:"Salman",salary:7000,gender:'Male'},
      {id:151,name:"Fatima",salary:3000,gender:'Female'},
      {id:151,name:"Fahad",salary:3000,gender:'Male'}
      ];
  }

  constructor() { }
}
