import { Component, OnInit, Input, EventEmitter, OnDestroy, Output } from '@angular/core';
import { HeroServiceService } from 'src/app/services/hero-service.service';
import { Heroe } from 'src/app/class/heroe';
import { componentFactoryName } from '@angular/compiler';

@Component({
  selector: 'app-herolist',
  templateUrl: './herolist.component.html',
  styleUrls: ['./herolist.component.css']
})
export class HerolistComponent implements OnInit, OnDestroy {

  @Output() modify = new EventEmitter<number>();

  heroes: Array<Heroe> = new Array<Heroe>();
  show: boolean = true;
  newHeroName: string = '';

  constructor( private service:HeroServiceService ) {
  }

  ngOnInit() {
    this.heroes = this.service.load();
  }

  ngOnDestroy(){
    this.service.save(this.heroes);
  }

  addHero( event : Heroe ){
    this.heroes.push(event);
  }

  removeHero( index:number ){
    this.heroes.splice(index, 1);
  }

  modifyHero( index:number ){
    this.modify.emit(index);
  }

  showHideList(){
    this.show = !this.show;
  }

  puntuar( objAux:any ){
    this.heroes[objAux.id].puntuacion = objAux.heroe.puntuacion;
    console.log(this.heroes);
  }
}
