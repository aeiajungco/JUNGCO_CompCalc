import { NgSwitch } from '@angular/common';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() num1:any;
  @Input() num2:any;
  @Input() operation:any;

  answer: any;

  constructor() { }

  ngOnInit(): void {
    
  }
  
  ngOnChanges () {

      if (this.operation === 1)
        this.answer = parseInt(this.num1) + parseInt(this.num2);

      else if (this.operation === 2)
        this.answer = parseInt(this.num1) - parseInt(this.num2);
      
      else if (this.operation === 3)
        this.answer = parseInt(this.num1) * parseInt(this.num2);
      
      else if (this.operation === 4) {
        if (parseInt(this.num2) === 0)
          this.answer = 'undefined';
        else
          this.answer = parseInt(this.num1) / parseInt(this.num2);
      }

      if (this.answer == 0)
        this.answer = '0';
       
    if (this.num1 == '' || this.num2 == '')
      this.operation = 0;

  }

}
