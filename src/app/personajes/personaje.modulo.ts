import { NgModule } from "@angular/core";
import { PersonajeComponent } from "./personaje/personaje.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
      PersonajeComponent,
    ],
    exports: [ /* exponer */
      PersonajeComponent,
    ],
    imports: [
      CommonModule /* ngFor, ngIf */
    ]
  })

  export class PersonajeModulo {
    
  }
  