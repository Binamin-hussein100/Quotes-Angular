import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Display } from '../display';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    
  newPost = new Display("","","",0,0)
  @Output() addQuote = new EventEmitter <Display>()
  posts: any;

  submit(){
    this.addQuote.emit(this.newPost)
  }

addNewQuote(posts:Display){
    this.posts.push(posts)
}
   
  constructor() { }

  ngOnInit(): void {
  }

}

