import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-filter',
  templateUrl: './employee-filter.component.html',
  styleUrls: ['./employee-filter.component.css']
})
export class EmployeeFilterComponent {
 
  @Input()
  all:number=0;
  @Input()
  male:number=0;
  @Input()
  female:number=0;
  
  
}
