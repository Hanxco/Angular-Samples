import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorBetaComponent } from './calculator-beta.component';

describe('CalculatorBetaComponent', () => {
  let component: CalculatorBetaComponent;
  let fixture: ComponentFixture<CalculatorBetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorBetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorBetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
