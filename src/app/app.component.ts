import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  public titulo: string = 'Hola mundo';
  public contador: number = 10;

  incrementarValor(value: number): void {
    this.contador += value;
  }

  reiniciar(): void {
    this.contador = 10;
  }
}



