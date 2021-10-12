import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Components Calculator';

  num1 = '';
  num2 = '';
  op: number = 0;

  getFirst(num1: any) {
    this.num1 = num1;
  }

  getSecond(num2: any) {
    this.num2 = num2;
  }

  getOp (op: number) {
    this.op = op;
    if (this.num1 == '' || this.num2 == '')
      this.op = 0;
  }
  
}
