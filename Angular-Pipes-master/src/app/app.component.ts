import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  nombre = "Fernando";
  arrCar = ['Seat','Opel','BMW', 'Mercedes', 'KIA'];
  numPi = Math.PI;
  iva = 0.213;
  importe = 33.2;
  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion : {
      calle : "Primera",
      casa: "19"
    }
  }
  valorDePromesa = new Promise( ( resolve, reject ) => {
    setTimeout( ()=>resolve('Llego la data'), 3500 );
  })

  date1 = new Date();

  nombre2 = "albeRto FErnaNdo herreRa";
  youtubeUrl = "https://www.youtube.com/embed/";
  video = "zAWsoFk2yVw";
}
