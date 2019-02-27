import { Component, OnInit } from '@angular/core';
import { State } from "../../enums/state.enum";

@Component({
  selector: 'app-calculator-beta',
  templateUrl: './calculator-beta.component.html',
  styleUrls: ['./calculator-beta.component.css']
})
export class CalculatorBetaComponent implements OnInit {

  currentState : number = State.init;
  firstFigure : number = 0;
  secondFigure : number = 0;
  operator : string = '';
  display : string = '' ;
  result : number = 0;

  constructor() { }

  ngOnInit() {
  }

  handleSymbol( value : string ){
    this.display += String(value);
    switch( this.currentState ){
      case( State.init ):
        return;
      case(State.firstState):
        if( value === '+' || value=== '*' || value === '-' || value === '/' ){
          this.operator = value;
          this.currentState = State.secondState;
          this.display += String(value);
        }
        break;
      case(State.secondState):
        if(value === '='){
          this.result = this.resolve();
          this.display = this.display + String(value) + this.result;
        }
    }
  }

  resolve() : number {
    switch(this.operator){
      case('+'):
        return this.firstFigure + this.secondFigure;
        break;
      case('-'):
        return this.firstFigure - this.secondFigure;
        break;
      case('*'):
        return this.firstFigure * this.secondFigure;
        break;
      case('/'):
        return this.firstFigure / this.secondFigure;
        break;
    }
  }

  handleNumber(value : number){
    this.display += String(value);
    if(this.currentState === State.init ){
      this.firstFigure = value;
      this.currentState = State.firstState;
    }
    else if(this.currentState === State.firstState ){
      this.firstFigure = this.firstFigure*10 + value;
    }
    else if(this.currentState === State.secondState ){
      this.secondFigure = this.firstFigure*10 + value;
    }
    else if (this.currentState === State.result){
      this.firstFigure = value;
      this.currentState = State.firstState;
      this.secondFigure = 0;
      this.result = 0;
      this.display = '';
      this.operator = '';
    }
    else{
      return;
    }
    this.display += String(value);
  }
}
