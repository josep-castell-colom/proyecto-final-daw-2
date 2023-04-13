import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { map } from 'rxjs';
import { User } from 'src/app/models/User.interface';
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
export class LoginComponent implements OnInit {
  users: User[];
  constructor(private authService: AuthService) {}
  loginUser(event: FormGroup) {
    this.authService
      .logIn(event.value.email, event.value.password)
      .pipe(map((e) => console.log(e)))
      .subscribe();
  }
  ngOnInit() {}
}
