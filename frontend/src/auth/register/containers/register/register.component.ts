import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Register } from 'src/auth/store';

@Component({
  selector: 'register',
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
      <auth-form (submitted)="registerUser($event)">
        <h1>Register</h1>
        <a routerLink="/auth/login">Already have an account?</a>
        <button type="submit">Create account</button>
      </auth-form>
    </div>
  `,
})
export class RegisterComponent {
  constructor(private store: Store) {}
  registerUser(event: FormGroup) {
    this.store.dispatch(
      Register({ email: event.value.email, password: event.value.password })
    );
  }
}
