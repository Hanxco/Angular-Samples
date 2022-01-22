import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  heroes:Heroe[] = [];
  termino:string;

  constructor( private _heroesService: HeroesService,
               private activatedRoute: ActivatedRoute,
               private router: Router ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.searchHeroe( params['termino'] );
    })
  }

  getUrlHeroe( idx:number ){
    this.router.navigate( ['./heroes/heroe', idx] );
  }

}
