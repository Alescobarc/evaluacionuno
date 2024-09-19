import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {
  //listado de Asignaturas

  asignaturas=[

    {nombre: 'matematica', seleccionada: false},
    {nombre: 'educacion fisica', seleccionada: false},
    {nombre: }

  ]

  constructor() { }

  ngOnInit() {
  }

}
