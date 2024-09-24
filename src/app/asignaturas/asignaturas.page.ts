import { Component, OnInit } from '@angular/core';
import { AsignaturasService } from '../services/asignaturas.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {

  asignaturas=[

    {nombre: 'CALIDAD DE SOFTWARE (CSY4111)'},
    {nombre: 'ARQUITECTURA (ASY4131)'},
    {nombre:'INGLES INTERMEDIO (INI5111)'},
    {nombre: 'ETICA PARA EL TRABAJO (EAY4450)'},
    {nombre: 'PROGRAMACION DE APLICACIONES MOVILES (PGY4121)'},
    {nombre: 'PROCESO DE PORTAFOLIO 4 (APY4461)'}
  ]

  constructor(
    private asignaturasService: AsignaturasService,
    private navCtrl: NavController 
  ){}
  
  goToInicio() {
    this.navCtrl.navigateBack('/inicio')
  };

  ngOnInit() {
  }
  



}
