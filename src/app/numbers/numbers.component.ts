import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() firstNum = new EventEmitter<any>();
  @Output() secondNum = new EventEmitter<any>();

  first(num1: any) {
    this.firstNum.emit(num1);
    this.validate(num1);
    console.log(num1);
  }

  second(num2: any) {
    this.secondNum.emit(num2);
    this.validate(num2);
    console.log(num2);
  }

  validate (num:any) {
    if (isNaN(num))
      alert("Please input a valid number!");
  }
}
