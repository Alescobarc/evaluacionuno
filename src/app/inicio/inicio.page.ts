import { Component } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {

  usuario: string = '';

  constructor(
    private navCtrl: NavController,
    private menuCtrl: MenuController 
  ) {}

  goToAsignaturas() {
    this.navCtrl.navigateForward('/asignaturas');
  }

  goToAsistencia() {
    this.navCtrl.navigateForward('/asistencias');
  }

  goToDatos() {
    this.navCtrl.navigateForward('/datos');
  }

  goToLogin() {
    this.navCtrl.navigateRoot('/login'); 
  }

  openMenu() {
    this.menuCtrl.open(); 
  }

  ngOnInit() {
    this.usuario = 'Usuario1';
  }
}
