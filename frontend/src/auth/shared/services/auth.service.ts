import { Injectable } from '@angular/core';
import { env } from 'src/env';
import { HttpClient } from '@angular/common/http';

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
  constructor(private http: HttpClient, private store: Store) {}

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

  register(currentEmail: string, password: string): Observable<TokenResponse> {
    return this.http.get(`http://localhost/sanctum/csrf-cookie`).pipe(
      switchMap(() => {
        return this.http.post(
          `http://localhost/api/register`,
          JSON.stringify({
            email: currentEmail,
            password: password,
          })
        );
      }),
      switchMap((response: any) => {
        return of({ token: response['access_token'] as string });
      })
    );
  }

  setToken(token: string) {
    sessionStorage.setItem('authToken', token);
  }

  getAuthUser(): Observable<User> {
    return this.http
      .get(`${env.API_URL}/user`)
      .pipe(map((response: any) => response.data));
  }

  logOut() {
    sessionStorage.removeItem('authToken');
  }

  checkAuthUser() {
    const token = sessionStorage.getItem('authToken');
    if (token) {
      this.store.dispatch(authStore.SetAuthToken({ token, register: false }));
    }
  }
}
