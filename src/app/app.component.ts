import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  name = 'Capitán América';
  name_two= 'MaRtIn AgUIlEra';
  array  = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
  personages = [ 'Ironman', 'Spiderman', 'Thor', 'Loki', 'Groot'];

  PI       : number   = Math.PI;
  percent  : number   = 0.235;
  salary   : number   = 1234.5;
  date     : Date     = new Date();
  idioma   : string   = 'es';
  activar  : boolean  = false;
  videoUrl : string   = 'https://www.youtube.com/embed/aFN-R65EL6s';
  valuePromise        = new Promise<string>( ( resolve ) =>{
    
    setTimeout(()=>{
      resolve('Llego la data')
    },4500)

  });

  hero = {
    name: 'Logan',
    key: 'Wolverine',
    age: 200,
    direccion: {
      street: 'Avenida siempre viva',
      house: '1234'
    }
  }

  mostrarOcultar(){
    if( this.activar ){
      return this.activar = false;
    }else{
      return this.activar = true;
    }
  }
}
