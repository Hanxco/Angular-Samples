import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeroServiceService } from 'src/app/services/hero-service.service';
import { Heroe } from 'src/app/class/heroe';

@Component({
  selector: 'app-listado-hero',
  templateUrl: './listado-hero.component.html',
  styleUrls: ['./listado-hero.component.css']
})
export class ListadoHeroComponent implements OnInit {

  @Input() arrHeroes: Array<Heroe>;
  @Output() remove = new EventEmitter<number>();
  @Output() modify = new EventEmitter<number>();
  @Output() puntuacion = new EventEmitter<object>();
  currentRate: number;

  constructor() { }

  ngOnInit() {
  }

  eliminarHero( index: number ){
    this.remove.emit(index);
  }

  modificarHero( index: number ){
    this.modify.emit(index);
  }

  puntuarlive(){
    console.log('cambio');
  }
  
  puntuar( index:number, heroe: Heroe){
    let heroeAux = {
      id : index,
      heroe : heroe
    }

    this.puntuacion.emit(heroeAux);
  }
}
