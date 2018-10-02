import { Component, OnInit } from '@angular/core';
import { Operator } from './shared/models/calculator/operator.model';
import { Add } from './shared/models/calculator/operator.add.model';
import { Subtract } from './shared/models/calculator/operator.subtract.model';
import { Multiply } from './shared/models/calculator/operator.multiply.model';
import { Divide } from './shared/models/calculator/operator.divide.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'estudo-orientado';

  error:any;

  operations: Array<Operator> = new Array<Operator>();
  currentOperator: Operator;
  constructor() {
   
  }

  updateOperation(newOperator: Operator) {
    this.currentOperator = newOperator;
  }

  ngOnInit() {
    let add = new Add();
    this.operations.push(add);
    this.operations.push(new Subtract());
    this.operations.push(new Multiply());
    this.operations.push(new Divide());

    this.currentOperator = add;

  }


  erroHandler(event){    
    this.error = event;
  }



}
