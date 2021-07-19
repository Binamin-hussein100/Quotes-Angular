import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big',
  templateUrl: './big.component.html',
  styleUrls: ['./big.component.css']
  
})
export class BigComponent implements OnInit {
  title = "QUOTE APP"
  constructor() { }

  ngOnInit(): void {
  }

}
