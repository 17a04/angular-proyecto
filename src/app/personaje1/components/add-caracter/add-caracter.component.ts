import { Component, EventEmitter, Output } from '@angular/core';
import { ICaracter } from '../../interfaces/caracter.interface';

@Component({
  selector: 'app-per1-add-caracter',
  standalone: false,
  templateUrl: './add-caracter.component.html',
  styleUrls: ['./add-caracter.component.css'] // Corregido 'styleUrls'
})
export class AddCaracterComponent {
  @Output()
  public onNuevoCaracter: EventEmitter<ICaracter> = new EventEmitter();

  public caracter: ICaracter = {
    name: '',
    tiempo: 0,
    nivel: 1,
    vistas: 3
  };

  enviarCaracteres(): void {
    console.log(this.caracter);
    if (this.caracter.name.length === 0) return;

    this.onNuevoCaracter.emit({ ...this.caracter });

    // Reiniciar valores después de emitir
    this.caracter = {
      name: '',
      tiempo: 0,
      nivel: 1,
      vistas: 3
    };
  }
}
