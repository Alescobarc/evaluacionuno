import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {

    usuario:{nombre: string, rut: string, edad: string, usuario: string, email: string, clave: string, carrera: string, telefono: string } = {
    nombre: '',
    rut: '',
    edad: '',
    usuario: '',
    email: '',
    clave: '',
    carrera: '',
    telefono: ''
  };

 
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.usuario = {
      nombre: 'Jason momoa',
      rut: '20.532.655-1',
      edad: '20',
      usuario: 'Usuario1',
      clave: 'MiClav3',
      email: 'J.momoa@gmail.com',
      carrera: 'Ingenieria en informatica',
      telefono: '987-654-3210'
    };
   
  }

  goToInicio() {
    this.navCtrl.navigateBack('/inicio');
  }

}
