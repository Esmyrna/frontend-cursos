import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Button } from '../../components/button/button';
import { Router } from '@angular/router';

@Component({
  imports: [Button, FormsModule],
  selector: 'app-login',
  styleUrls: ['./login.css'],
  templateUrl: './login.html',
})
export class Login {
  userName: string;

  constructor(private rota: Router) {}

  onAccess() {
    sessionStorage.setItem('user', this.userName);
    this.rota.navigate(['/home']); 
  }
}
