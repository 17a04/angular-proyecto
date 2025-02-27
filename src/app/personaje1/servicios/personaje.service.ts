import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { ICaracter } from '../interfaces/caracter.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {
  public caracterV: ICaracter[] = [
    {
      id: uuidv4(),
      name: 'ThunderCats', /* Personaje 1 */
      tiempo: 1985,
      nivel: 12,
      vistas: 45
    },
    {
      id: uuidv4(),
      name: 'Transformers', /* Personaje 2 */
      tiempo: 1984,
      nivel: 23,
      vistas: 4
    },
    {
      id: uuidv4(),
      name: 'Toreto', /* Personaje 3 */
      tiempo: 2017,
      nivel: 1,
      vistas: 8
    }
  ];

  /** Agrega un nuevo personaje a la lista */
  addCaracter(caracter: ICaracter): void {
    console.log('Nuevo personaje agregado:', caracter);

    const newCaracter: ICaracter = { id: uuidv4(), ...caracter };
    this.caracterV.unshift(newCaracter); // Agregar al inicio de la lista
  }

  /** Elimina un personaje por su ID */
  deleteCaracterPorId(id: string): void {
    this.caracterV = this.caracterV.filter(carac => carac.id !== id);
  }
}
