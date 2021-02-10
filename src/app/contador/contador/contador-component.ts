//modulo "component" para crear un componente
import { Component } from "@angular/core";

@Component({
  //"app" para indicar que el componente es manual
  selector: 'app-contador',
  //Template,  el codigo que va a ejecutar el componente
  template: `
  <h1>{{title}}</h1>

  <h3>La base es: <strong>{{base}}</strong></h3>

  <button (click)="acumular(base)">+{{base}}</button>

  <span>{{numero}}</span>

  <button (click)="acumular(-base)">-{{base}}</button>

  `
})
//importar el nombre de la clase en app.modules
export class contadorComponent {
  title = 'Contador App';
  numero: number = 10;
  base: number = 5;

  acumular(num: number) {
    this.numero += num;
  }
}
