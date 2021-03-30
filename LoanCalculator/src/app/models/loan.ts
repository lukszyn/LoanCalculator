export class Loan {
    public amount:number = 0;
    public percentage:number = 0;
    public loanPeriod:number = 0;
    public loanPeriodMonths:number = this.loanPeriod * 12;
    public installmentsAmount:number = 0;
    public totalPayment:number = 0;
    public yearlyCost:number = 0;
    public percentageCost:number = 0;

    constructor(){
    }
  }
  