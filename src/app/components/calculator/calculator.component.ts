import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {

  display: string = '';

  constructor() {
  }

  ngOnInit() {
  }

  handleSignal( event : any ){
    console.log('Entrando en el handleSignal');
    console.log(event);
    this.display = event;
  }

}
