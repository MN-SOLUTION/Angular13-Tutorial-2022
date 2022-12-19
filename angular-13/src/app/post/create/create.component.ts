import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form!: FormGroup;
// Child Component or Nested Component
dataToBePassed: any = {}; //to be passed into Parent compoenent.....
isButtonDisable:boolean=false;  
  constructor(private postService:PostService,private router: Router)
   {

   }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
    });
  }

  get f(){
    return this.form.controls;
  }
     
  
  //submit event......

  submit(){
    this.isButtonDisable=!this.isButtonDisable; //setting false to true...
    this.postService.createNewPost(this.form.value).subscribe((res:any) => {
      console.log(res);
      this.dataToBePassed=res;
      this.postData();
      alert('Post created successfully!');
       this.form.reset();
       this.isButtonDisable=!this.isButtonDisable; //setting false to true...
       //  this.router.navigateByUrl('post');

    })
  }

   //Event Emitter 
   @Output()
   valuefromEmitter:EventEmitter<any> =new EventEmitter<any>();
 
 
   //PostData()
    postData(){
     this.valuefromEmitter.emit(this.dataToBePassed);
    }




}
