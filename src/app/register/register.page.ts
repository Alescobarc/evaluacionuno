import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  isRegisterModalOpen = false;
  email: string = '';
  rut: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor() { }

  ngOnInit() {
  }

  openRegisterModal() {
    this.isRegisterModalOpen = true;
  }

  closeRegisterModal() {
    this.isRegisterModalOpen = false;
  }

  clearForm() {
    this.email = '';
    this.rut = '';
    this.password = '';
    this.confirmPassword = '';
  }

  register() {
    if (this.email && this.rut && this.password && this.confirmPassword) {
      if (this.password === this.confirmPassword) {
        console.log('Correo:', this.email);
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
