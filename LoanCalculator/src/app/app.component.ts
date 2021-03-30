import { Component, Output, EventEmitter } from '@angular/core';
import { Loan } from './models/loan';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LoanCalculator';
  loan: Loan;

  constructor() {
    this.loan = new Loan();
  }

  addLoan(newLoan: Loan) {
    this.loan = newLoan;
    this.calculateLoan(this.loan);
  }

  calculateLoan(loan: Loan) {

  }
}
