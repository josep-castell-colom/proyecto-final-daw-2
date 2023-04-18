import { Injectable } from '@angular/core';
import { env } from 'src/env';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

import {
  BehaviorSubject,
  ObservableInput,
  of,
  pipe,
  switchMap,
  tap,
} from 'rxjs';

import { Store } from 'store';

import { User } from 'src/app/models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: User[];

  private _login$ = new BehaviorSubject<boolean>(false);
  login$ = this._login$.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store
  ) {}

  fetchUsers() {
    this.http
      .get<User[]>(`${env.API_URL}/users`)
      .subscribe((users: any) => (this.users = users.data as User[]));
  }

  logIn(currentEmail: string, password: string): boolean {
    let token: string;
    this.http
      .get(`http://localhost/sanctum/csrf-cookie`)
      .pipe(
        switchMap(() => {
          return this.http.post(
            `http://localhost/api/login`,
            JSON.stringify({
              email: currentEmail,
              password: password,
            })
          );
        }),
        tap((response: any) => {
          token = response['plain-text-token'];

          this.store.set('authToken', token);
          sessionStorage.setItem('authToken', token);
        })
      )
      .subscribe(() => {
        this.http
          .get<User>(`${env.API_URL}/user`)
          .subscribe((user) => this.store.set('user', user));
      });
    return false;
  }

  logOut() {
    this._login$.next(false);
    this.store.set('user', null);
    localStorage.removeItem('current_user');
    this.router.navigate(['']);
  }

  checkAuthUser() {
    const token = sessionStorage.getItem('authToken');
    if (token) {
      this.store.set('authToken', token);
      this.http
        .get<User>(`${env.API_URL}/user`)
        .subscribe((user) => this.store.set('user', user));
    } else {
      this.store.set('authToken', null);
    }
  }
}
