import { Component, Output, EventEmitter } from '@angular/core';
import { Loan } from './models/loan';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'LoanCalculator';
  public loan: Loan;

  constructor() {
    this.loan = new Loan()
  }
}
