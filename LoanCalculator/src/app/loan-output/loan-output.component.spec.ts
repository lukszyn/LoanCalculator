import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanOutputComponent } from './loan-output.component';

describe('LoanOutputComponent', () => {
  let component: LoanOutputComponent;
  let fixture: ComponentFixture<LoanOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
