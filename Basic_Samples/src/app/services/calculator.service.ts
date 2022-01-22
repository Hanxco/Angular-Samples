import { Injectable } from '@angular/core';
import { Output, EventEmitter } from "@angular/core";

enum operador {
  sum = '+',
  minus = '-',
  div = '/',
  mul = '*'
}

@Injectable({
  providedIn : 'root'
})

export class CalculatorService {

  @Output() signal: EventEmitter<string> = new EventEmitter<string>();
  
  heroes: Array<string> = ['Batman', 'Superman', 'Spiderman'];
  estado : boolean = false;
  display : string = '';
  numero : number = 0;
  operador : string = '';
  resultado : number = 0;

  constructor() { }

  calcular(){
    if(this.numero != null && this.estado == true){
      switch(this.operador){
        case operador.sum: {
          this.display = String(Number(this.numero) + Number(this.display));
          this.signal.emit(this.display);
          break;
        }
        case operador.minus: {
          this.display = String(Number(this.numero) - Number(this.display));
          break;
        }
        case operador.mul: {
          this.display = String(Number(this.numero) * Number(this.display));
          break;
        }
        case operador.div: {
          this.display = String(Number(this.numero) / Number(this.display));
          break;
        }
      }

      console.log('resultado : ' + this.display);
    }
  }
}
