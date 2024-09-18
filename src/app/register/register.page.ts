import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  isRegisterModalOpen = false;
  fullName: string = '';
  rut: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor() { }

  ngOnInit() {
  }

  openRegisterModal() {
    this.isRegisterModalOpen = true;
  }

  // Cerrar el modal de registro
  closeRegisterModal() {
    this.isRegisterModalOpen = false;
  }

  // Función para registrar al usuario
  register() {
    if (this.fullName && this.rut && this.password && this.confirmPassword) {
      if (this.password === this.confirmPassword) {
        // Aquí puedes añadir la lógica de registro, como llamar a un servicio
        console.log('Nombre:', this.fullName);
        console.log('RUT:', this.rut);
        console.log('Contraseña:', this.password);
        this.closeRegisterModal();
      } else {
        console.log('Las contraseñas no coinciden.');
      }
    } else {
      console.log('Por favor complete todos los campos.');
    }
  }
}
