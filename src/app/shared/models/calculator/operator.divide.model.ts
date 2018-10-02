import { Operator } from './operator.model';


export class Divide extends Operator{

    constructor() {
       super("/", "divididos", "Divisão");
    }

    doOperation(firstValue:number,secondValue:number):number{       
        return firstValue/secondValue;
    }

    isValid(firstValue:number,secondValue:number):any{       
       if(secondValue===0){          
           return {valid:false,message:"Divisão por zero",dialog:"danger"};
       }else{       
           return {valid:true};
       }
    }
}