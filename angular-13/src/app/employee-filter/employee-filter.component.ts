import { Component, Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-employee-filter',
  templateUrl: './employee-filter.component.html',
  styleUrls: ['./employee-filter.component.css']
})
export class EmployeeFilterComponent {
  
// Child Component or Nested Component
dataToBePassed: string = 'All'; //to be passed into Parent compoenent.....
   
  @Input()
  all:number=0;
  @Input()
  male:number=0;
  @Input()
  female:number=0;
  
  //Event Emitter 
  @Output()
  valuefromEmitter:EventEmitter<string> =new EventEmitter<string>();


  //PostData()
   postData(){
    this.valuefromEmitter.emit(this.dataToBePassed);
   }


}
