import { Component, OnInit } from '@angular/core';
import {PostService} from './post.service'
import {Post} from './post';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers:[PostService]
})
export class PostComponent implements OnInit {

  post:any={};
  posts: Post[] = [];
  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.postService.getAllPost().subscribe((data: Post[])=>{
      this.posts = data.sort((a,b) => b.id - a.id);      
    })  
  }

  dataToreceive(valuefromEmitter: any): void {
    this.post = valuefromEmitter; //we are setting the data that is coming from child component......
    this.posts.unshift(this.post);
}

}
