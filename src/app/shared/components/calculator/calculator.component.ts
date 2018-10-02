import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Operator } from '../../models/calculator/operator.model';



@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  inputValue1: number;
  inputValue2: number;
  result: number;

  @Input() operator: Operator;
  @Output() resultEvent = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  ngOnChanges() {
    this.doCalculator();
  }

  doCalculator() {
   
    if (this.inputValue1!=undefined && this.inputValue2!=undefined) {  

      var checkOperation = this.operator.isValid(this.inputValue1, this.inputValue2);
    
      if (checkOperation.valid===true) {
        this.result = this.operator.doOperation(this.inputValue1, this.inputValue2);
        this.resultEvent.emit(true);
      } else {
        this.result = null;       
        this.resultEvent.emit(checkOperation);
      }
     
    }else{
      this.result = null;   
      this.resultEvent.emit({valid:false,message:"Preencha os campos corretamente",dialog:"info"});    
    }

  }




}
