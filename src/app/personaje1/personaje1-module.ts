import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { ListComponent } from "./components/list/list.component";
import { AddCaracterComponent } from './components/add-caracter/add-caracter.component';
import { MainPageComponent } from "./pagina/main-pagina.component";

@NgModule({
    declarations: [
        MainPageComponent,
        ListComponent,
        AddCaracterComponent
    ],
    exports: [
        MainPageComponent,
        ListComponent, // Ahora puede ser usado fuera de este módulo
        AddCaracterComponent // También lo exportamos si se usa en otro módulo
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class Personaje1Module { }
