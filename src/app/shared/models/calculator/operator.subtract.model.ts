
import { Operator } from './operator.model';

export class Subtract extends Operator{

    constructor() {
       super("-", "subtraídos", "Subtração");
    }

    doOperation(firstValue:number,secondValue:number):number{
        return firstValue-secondValue;
    }

    isValid(firstValue:number,secondValue:number):any{
        return {valid:true};
    }
}