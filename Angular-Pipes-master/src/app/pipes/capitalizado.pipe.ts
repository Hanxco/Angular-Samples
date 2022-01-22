import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {
  transform( value: string, todas:boolean = true ): string {
    value = value.toLowerCase();
    let nombres = value.split("");

    for ( let i in nombres ){
      if( todas ){
          nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
      }else{
        nombres[0] = nombres[0][0].toUpperCase() + nombres[i].substr(1);
      }
    }

    return nombres.join("");
  }
}
