import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { HeroeComponent } from './components/heroe/heroe.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'search/:termino', component: SearchComponent },
  { path: 'heroes/heroe/:id', component: HeroeComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' } // ruta por defecto
];

export const APP_ROUTING = RouterModule.forRoot( APP_ROUTES );
