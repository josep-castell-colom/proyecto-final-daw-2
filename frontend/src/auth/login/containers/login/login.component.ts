import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/auth/shared/services/auth.service';

import * as authStore from '../../../store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'login',
  styles: [
    `
      :host > div {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `,
  ],
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
  constructor(private store: Store) {}

  loginUser(event: FormGroup) {
    this.store.dispatch(
      authStore.Login({
        email: event.value.email,
        password: event.value.password,
      })
    );
  }
}
