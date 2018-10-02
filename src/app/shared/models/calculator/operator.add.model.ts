
import { Operator } from './operator.model';


export class Add extends Operator{

    constructor() {
       super("+", "somados", "Soma");
    }

    doOperation(firstValue:number,secondValue:number):number{
        return firstValue+secondValue;
    }
    
    isValid(firstValue:number,secondValue:number):any{
        return {valid:true};
    }
}