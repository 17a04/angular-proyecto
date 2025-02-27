import { Component, OnInit } from '@angular/core';
import { ICaracter } from '../interfaces/caracter.interface';
import { PersonajeService } from '../servicios/personaje.service';

@Component({
  /* Este es el componente PADRE */
  selector: 'app-per1-main-pagina',
  standalone: false,
  templateUrl: './main-pagina.component.html'
})
export class MainPageComponent {
  constructor(private perService: PersonajeService) {}

  get caracterV(): ICaracter[] {
    return [...this.perService.caracterV];
  }

  onDeleteCaracter(id: string): void {
    this.perService.deleteCaracterPorId(id);
  }
  
  onNewCaracter(caracter: ICaracter): void {
    this.perService.addCaracter(caracter);
  }
  
}
