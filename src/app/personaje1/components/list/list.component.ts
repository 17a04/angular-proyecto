import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICaracter } from '../../interfaces/caracter.interface';

@Component({
  selector: 'app-personaje1-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public caracterList: ICaracter[] = [
    {
      name: 'Mazinger Z', /* Personaje Temporal */
      tiempo: 1972,
      nivel: 12,
      vistas: 4
    }
  ];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCaracterH(id?: string): void {
    if (!id) return; // Si no existe el id, no hace nada
    console.log(id);
    this.onDelete.emit(id);
  }
}
