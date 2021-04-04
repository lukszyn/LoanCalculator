export class Installment {

    public counter:number = 0;
    public amount:number;
    public percentage:number;
    public paidAmount:number;
    public remainingAmount:number;

    constructor(counter:number, amount:number, percentage:number, paidAmount:number, remainingAmount:number){
        this.counter = counter;
        this.amount = amount;
        this.percentage = percentage;
        this.paidAmount = paidAmount;
        this.remainingAmount = remainingAmount;
    }

  }