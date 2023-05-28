import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

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
  constructor() {}
  registerUser(event: FormGroup) {
    console.log(event.value);
  }
}
