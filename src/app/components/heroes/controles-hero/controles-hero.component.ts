import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HeroServiceService } from 'src/app/services/hero-service.service';
import { Heroe } from 'src/app/class/heroe';

@Component({
  selector: 'app-controles-hero',
  templateUrl: './controles-hero.component.html',
  styleUrls: ['./controles-hero.component.css']
})
export class ControlesHeroComponent implements OnInit {

  @Output() signal = new EventEmitter<Heroe>();
  
  newHeroName:string = '';
  descripcionHero:string = '';
  hero1: Heroe;

  constructor() { }

  ngOnInit() {
  }

  addHero(){
    this.hero1 = new Heroe();
    this.hero1.init( this.newHeroName, this.descripcionHero, 0 );
    this.signal.emit(this.hero1);
    this.newHeroName = '';
    this.descripcionHero = '';
  }

  showHideList(){
  }

}
