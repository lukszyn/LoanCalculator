import { Component, Input, OnInit } from '@angular/core';
import { Installment } from '../models/installment';
import { Loan } from '../models/loan';

@Component({
  selector: 'app-loan-schedule',
  templateUrl: './loan-schedule.component.html',
  styleUrls: ['./loan-schedule.component.css']
})

export class LoanScheduleComponent implements OnInit {

  @Input() loan: Loan;

  constructor() { }

  ngOnInit(): void {
  }

}
