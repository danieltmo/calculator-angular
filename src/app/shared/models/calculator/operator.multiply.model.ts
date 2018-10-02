
import { Operator } from './operator.model';
export class Multiply extends Operator{

    constructor() {
       super("*", "multiplicados", "Multiplicação");
    }

    doOperation(firstValue:number,secondValue:number):number{
        return firstValue*secondValue;
    }
    isValid(firstValue:number,secondValue:number):any{
        return {valid:true};
    }
}