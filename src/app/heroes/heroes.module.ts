import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { heroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";

//definimos el decorador
@NgModule({
  declarations: [
    heroeComponent,
    ListadoComponent
  ],
  exports: [
    ListadoComponent
  ],
  imports:[
    CommonModule
  ]
})

export class heroesModule { //exportamos la clase

}
