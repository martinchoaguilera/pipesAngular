import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasenia'
})
export class ContraseniaPipe implements PipeTransform {

  transform(value: string, expresion:boolean=true ): string {
    
    let newValue='';
    console.log(value);
    if (expresion) {
      for (var i = 0; i < value.length; i++) {
        newValue += value[i].replace(value[i], '*');
      }
    } else {
      newValue= value;
    }

    return newValue;
  }

}
