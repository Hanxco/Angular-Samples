import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';

enum operador {
  sum = '+',
  minus = '-',
  div = '/',
  mul = '*'
}

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  @Output() signal: EventEmitter<string> = new EventEmitter<string>();

  constructor( public service : CalculatorService ) {
  }

  entradaNumero( variable : any ){
    this.service.estado = true;
    this.service.display = this.service.display + variable;
    this.signal.emit(this.service.display);
    console.log(variable);
  }

  entradaOperador( variable : string ){
    if(this.service.estado === true){
      this.service.numero = Number(this.service.display);
      this.service.operador = variable;
      this.service.display = '';
      this.service.estado = false;
      this.signal.emit(this.service.display);
    }
    console.log(variable);
  }

  limpiar(){
    this.service.display = '';
    this.service.operador = '';
    this.service.numero = 0;
    this.signal.emit(this.service.display);
  }

  ngOnInit() {
  }

}
