import { Injectable } from '@angular/core';
import { Output, EventEmitter } from "@angular/core";
import { Heroe } from "../class/heroe";

@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {
  private saveHeroes:Array<Heroe> = new Array<Heroe>();

  constructor() {
  }

  save( heroes : Heroe[] ){
    this.saveHeroes = heroes;
  }

  load(): Heroe[] {
    return this.saveHeroes;
  }
}