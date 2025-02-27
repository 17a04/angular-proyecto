import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent1 } from './Contador/contador.component';
import { ListadoComponent } from './personajes/listado/listado.component';
import { PersonajeModulo } from './personajes/personaje.modulo';
import { Personaje1Module } from './personaje1/personaje1-module';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContadorComponent1,
    PersonajeModulo,
    Personaje1Module, // Ya incluye ListComponent y AddCaracterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
