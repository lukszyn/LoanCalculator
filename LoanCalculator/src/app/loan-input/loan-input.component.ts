import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Loan } from '../models/loan';

@Component({
  selector: 'app-loan-input',
  templateUrl: './loan-input.component.html',
  styleUrls: ['./loan-input.component.css']
})
export class LoanInputComponent implements OnInit {

  @Input() public loan: Loan;
  @Output() public loanChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
}
