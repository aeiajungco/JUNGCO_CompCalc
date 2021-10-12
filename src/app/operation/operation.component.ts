import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() newItemEvent = new EventEmitter<any>();
  
  add() {
    this.newItemEvent.emit(1);
    console.log("+");
  }

  subtract() {
    this.newItemEvent.emit(2);
    console.log("-");
  }

  multiply() {
    this.newItemEvent.emit(3);
    console.log("*");
  }

  divide() {
    this.newItemEvent.emit(4);
    console.log("/");
  }
}
