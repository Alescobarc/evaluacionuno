import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  isModalOpen = false;
  isRecoveryModalOpen = false; 
  usuario: string = '';
  clave: string = '';
  errorMessage: string = ''; 

  // Recuperación de contraseña
  usuarioRecuperacion: string = '';
  nuevaClave: string = '';
  recoveryErrorMessage: string = ''; // Error para el modal de recuperación

  constructor() { }

  ngOnInit() {}

  // modal de login
  openLoginModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.errorMessage = ''; 
  }

  clearForm() {
    this.usuario = '';
    this.clave = '';
  }

  login() {
    if (!this.usuario || !this.clave) {
      this.errorMessage = 'Por favor, complete todos los campos.';
      return;
    }

    if (this.usuario === 'Usuario1' && this.clave === 'MiClav3') {
      console.log('Inicio de sesión exitoso');
      this.closeModal();
      this.clearForm();

      window.location.href = '/inicio';
    } else {
      this.errorMessage = 'Credenciales incorrectas. Por favor, inténtelo de nuevo.';
      console.log('Error: Credenciales incorrectas');
    }    
}


  openRecoveryModal() {
    this.isRecoveryModalOpen = true;
  }

  closeRecoveryModal() {
    this.isRecoveryModalOpen = false;
    this.recoveryErrorMessage = ''; 
  }

  resetPassword() {
    if (!this.usuarioRecuperacion || !this.nuevaClave) {
      this.recoveryErrorMessage = 'Por favor, complete todos los campos.';
      return;
    }

    console.log(`Usuario: ${this.usuarioRecuperacion}, Nueva clave: ${this.nuevaClave}`);
    this.closeRecoveryModal();
  }
}
