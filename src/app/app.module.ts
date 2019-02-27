import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { CalculatorBetaComponent } from './components/calculator-beta/calculator-beta.component';
import { BootstrapComponent } from './components/bootstrap/bootstrap.component';
import { DisplayComponent } from './components/display/display.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CalculatorService } from './services/calculator.service';
import { HerolistComponent } from './components/heroes/herolist/herolist.component';
import { FlexboxComponent } from './components/flexbox/flexbox.component';
import { FormsModule } from '@angular/forms';
import { ListadoHeroComponent } from './components/heroes/listado-hero/listado-hero.component';
import { ControlesHeroComponent } from './components/heroes/controles-hero/controles-hero.component';
import { HeroServiceService } from './services/hero-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    CalculatorBetaComponent,
    BootstrapComponent,
    DisplayComponent,
    ButtonsComponent,
    HerolistComponent,
    FlexboxComponent,
    ListadoHeroComponent,
    ControlesHeroComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    CalculatorService,
    HeroServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
