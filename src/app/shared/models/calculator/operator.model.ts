


export abstract class Operator {

    private symbol: String;
    private name: String;
    private operationName: String;

    constructor(symbol: String, name: String, operationName: String) {
        this.symbol = symbol;
        this.name = name;
        this.operationName = operationName;
    }

    abstract doOperation(firstValue:number,secondValue:number):number;

    abstract isValid(firstValue:number,secondValue:number):any;

    public getSymbol():String{
        return this.symbol;
    }
    public getName():String{
        return this.name;
    }
    public getOperationName():String{
        return this.operationName;
    }

}