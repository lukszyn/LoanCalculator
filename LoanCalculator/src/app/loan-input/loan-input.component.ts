import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Loan } from '../models/loan';

@Component({
  selector: 'app-loan-input',
  templateUrl: './loan-input.component.html',
  styleUrls: ['./loan-input.component.css']
})
export class LoanInputComponent implements OnInit {

  loanTerm: number = 0;

  public loan: Loan = new Loan();

  @Output() newLoanEvent: EventEmitter<Loan> = new EventEmitter<Loan>();

  constructor() { }

  ngOnInit(): void {
  }

  addNewLoan(amount:number, term:number, percentage:number) {
    this.loan.amount = amount; 
    this.loan.loanPeriod = term; 
    this.loan.percentage = percentage; 
    this.newLoanEvent.emit(this.loan);
  }

}
