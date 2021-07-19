import { Component, Input,Output,EventEmitter, OnInit} from '@angular/core';
import { Display } from '../display';


@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  
  @Output() isComplete = new EventEmitter<boolean>();
  deletePost(complete:boolean){
    this.isComplete.emit(complete)
  }

  @Input() posts: Display
  constructor() { }

  ngOnInit(): void {
  }

}
