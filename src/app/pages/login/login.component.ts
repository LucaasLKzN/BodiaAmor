import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  password = '';
  showError = false;

  constructor(private router: Router) {}

  entrar() {
    // A senha é a data do pedido de namoro!
    if (this.password === '21022026') {
      this.showError = false;
      this.router.navigate(['/home']);
    } else {
      this.showError = true;
      this.password = '';
    }
  }
}
