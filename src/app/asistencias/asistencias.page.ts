import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.page.html',
  styleUrls: ['./asistencias.page.scss'],
})
export class AsistenciasPage implements OnInit {

  asistencias: {fecha: string, presente: boolean} [] = [];


  constructor(
    private navCtrl: NavController 
  ) {}

  goToInicio() {
    this.navCtrl.navigateBack('/inicio')
  };

  ngOnInit() {
    //fechas de prueba
    this.asistencias = [
      { fecha: '2024-09-01', presente: true },
      { fecha: '2024-09-02', presente: false },
      { fecha: '2024-09-03', presente: true },
    ];

  }

}
