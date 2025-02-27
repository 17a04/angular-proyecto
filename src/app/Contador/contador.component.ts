import { Component } from '@angular/core';

@Component({
  selector: 'app-contador1',
  standalone: true,  // Agregar esto para que sea standalone
  template: 
  `
  <h1>{{titulo}}</h1>
  <hr>
  <h3>Contador: {{contador}}</h3>

  <button (click)="increDecreValor(+2)">+1</button>
  <button (click)="reestablecer()">Reset</button>
  <button (click)="increDecreValor(-2)">-1</button>
  `
})
export class ContadorComponent1 {
  public titulo: string = 'Mi primera App de Angular modulo contador';
  public contador: number = 10;

  public increDecreValor(valor: number): void {
    this.contador += valor;
  }

  public reestablecer(): void {
    this.contador = 10;
  }
}
