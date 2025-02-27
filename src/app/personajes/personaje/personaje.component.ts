import { Component } from '@angular/core';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrl: './personaje.component.css'
})

export class PersonajeComponent {
  public nombre: string = 'Teresa';
  public edad: number = 20;

  get mensaje(): string {
    return this.nombre.toUpperCase();
  }

  getConcatenar(): string {
    return `${this.nombre}`; 
  }

  cambiarNombre(): void {
    this.nombre = 'Spiderman';
  }

  cambiarEdad(): void {
    this.edad = 25;
  }

  resetear(): void {
    this.nombre = 'Teresa';
    this.edad = 20;
  }
}
