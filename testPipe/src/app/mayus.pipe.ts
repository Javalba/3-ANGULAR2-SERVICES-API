import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayus'
})
export class MayusPipe implements PipeTransform {

  //'value' es el valor de la entrada, argumentos despues de los dos puntos.
  // ? --> es opcional.
  transform(value: any, args?: any, args2?: any): any {
/*     console.log('value: ',value);
    console.log('args: ',args); */

    return value.substring(0,1).toUpperCase()+value.substring(1);
/*     return 'hola';
 */  }


}
