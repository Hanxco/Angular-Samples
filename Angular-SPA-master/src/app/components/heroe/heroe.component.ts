import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe:any = {};
  imgCasa:string;

  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService ) {
    this.activatedRoute.params.subscribe( params => {
       this.heroe = this._heroesService.getHeroe( params['id'] );
       this.imgCasa = this._heroesService.getEquipo( params['id'] );
       console.log('imgCasa' + this.imgCasa);
    })
  }

  ngOnInit() {
  }

}
