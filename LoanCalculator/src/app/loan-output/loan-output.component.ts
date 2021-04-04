import { Component, Input, OnInit } from '@angular/core';
import { Loan } from '../models/loan';

@Component({
  selector: 'app-loan-output',
  templateUrl: './loan-output.component.html',
  styleUrls: ['./loan-output.component.css']
})
export class LoanOutputComponent implements OnInit {

  @Input() public loan: Loan;

  constructor() {
  }

  ngOnInit(): void {
  }

}
