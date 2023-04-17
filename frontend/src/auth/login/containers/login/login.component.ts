import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/auth/shared/services/auth.service';

@Component({
  selector: 'login',
  template: `
    <div>
      <auth-form (submitted)="loginUser($event)">
        <h1>Login</h1>
        <a routerLink="/auth/register">Not registered?</a>
        <button type="submit">Login</button>
      </auth-form>
    </div>
  `,
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  loginUser(event: FormGroup) {
    if (this.authService.logIn(event.value.email, event.value.password)) {
      this.router.navigate(['dashboard']);
    }
  }
}
