import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  isModalOpen = false;
  email: string = '';
  password: string = '';

  constructor() { }

  ngOnInit() {
  }
  
  openLoginModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  login() {
    if (this.email && this.password) {
      console.log('Correo:', this.email);
      console.log('Contraseña:', this.password);
      this.closeModal();
    } else {
      console.log('Por favor ingrese correo y contraseña.');
    }
  }
}
