import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsignaturasService {
  guardarAsignatura(seleccionadas: { nombre: string; seleccionada: boolean; }[]) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
