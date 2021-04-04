import { Installment } from "./installment";

export class Loan {
    public amount:number = 0;
    public percentage:number = 0;
    public period:number = 0;
    public periodMonths:number = 0;
    public installmentsAmount:number = 0;
    public totalPayment:number = 0;
    public yearlyCost:number = 0;
    public percentageCost:number = 0;
    public isCalculated:boolean = false;
    public installments:Array<Installment> = [];
    public isInstallments = false;

    constructor(){
    }

    calculateLoan() {

      if (this.amount && this.period && this.percentage) {
        this.isInstallments = false;
        this.periodMonths = this.period * 12;
        let q = 1 + ((this.percentage / 100) / this.periodMonths);
        this.installmentsAmount = this.amount * (Math.pow(q, this.periodMonths)) * ((q - 1) / (Math.pow(q, this.periodMonths) - 1));
        this.totalPayment = this.installmentsAmount * this.periodMonths;
        this.percentageCost = this.totalPayment - this.amount;
        this.yearlyCost = this.installmentsAmount * 12;
        this.isCalculated = true;
      }
    }

    createInstallments() {

      if (this.installments != []) this.installments = [];
      let paidAmount = 0;
      let remainingAmount = this.totalPayment;
      let lastInstallment;

      for (let i = 1; i <= this.periodMonths; i++) {

        if (i == this.periodMonths) {
          paidAmount = this.totalPayment;
          lastInstallment = remainingAmount;
          remainingAmount = 0;
          this.installments.push(new Installment(i, lastInstallment, this.percentage, paidAmount, remainingAmount));
        } else {
          paidAmount += this.installmentsAmount;
          remainingAmount -= this.installmentsAmount;
          this.installments.push(new Installment(i, this.installmentsAmount, this.percentage, paidAmount, remainingAmount));
        }
        this.isInstallments = true;
      }
    }
  }