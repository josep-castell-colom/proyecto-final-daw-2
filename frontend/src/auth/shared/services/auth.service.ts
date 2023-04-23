import { Injectable } from '@angular/core';
import { env } from 'src/env';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, map, of, switchMap } from 'rxjs';

import { Store } from '@ngrx/store';
import * as authStore from '../../store';

import { User } from 'src/app/models/user.interface';

export interface TokenResponse {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store
  ) {}

  // fetchUsers() {
  //   this.http
  //     .get<User[]>(`${env.API_URL}/users`)
  //     .subscribe((users: any) => (this.users = users.data as User[]));
  // }

  logIn(currentEmail: string, password: string): Observable<TokenResponse> {
    return this.http.get(`http://localhost/sanctum/csrf-cookie`).pipe(
      switchMap(() => {
        return this.http.post(
          `http://localhost/api/login`,
          JSON.stringify({
            email: currentEmail,
            password: password,
          })
        );
      }),
      switchMap((response: any) =>
        of({ token: response['plain-text-token'] as string })
      )
    );
  }

  setToken(token: string) {
    sessionStorage.setItem('authToken', token);
  }

  getAuthUser(): Observable<User> {
    return this.http.get(`${env.API_URL}/user`).pipe(map((user: any) => user));
  }

  logOut() {
    sessionStorage.removeItem('authToken');
  }

  checkAuthUser() {
    const token = sessionStorage.getItem('authToken');
    if (token) {
      // this.store.set('authToken', token);
      // this.http
      //   .get<User>(`${env.API_URL}/user`)
      //   .subscribe((user) => this.store.set('user', user));
      this.store.dispatch(authStore.SetAuthToken({ token }));
    } else {
      // this.store.set('authToken', null);
    }
  }
}
