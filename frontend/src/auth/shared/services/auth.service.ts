import { Injectable } from '@angular/core';
import { env } from 'src/env';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

import { BehaviorSubject, of, tap } from 'rxjs';

import * as bcrypt from 'bcryptjs';

import { Store } from 'store';

import { User } from 'src/app/models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: User[];
  // private _currentUser$ = new BehaviorSubject<User | null>(null);
  // currentUser$ = of(this._currentUser$);

  private _login$ = new BehaviorSubject<boolean>(false);
  login$ = this._login$.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store
  ) {
    this.fetchUsers();
  }

  // DB_password:    $2y$10$r33WYvjgueWhqyQvnPWzR.BWHRREIGMF1F16P/3xbmLpsvqqtTtha

  fetchUsers() {
    this.http
      .get<User[]>(`${env.API_URL}/users`)
      .subscribe((users: any) => (this.users = users.data as User[]));
  }

  logIn(currentEmail: string, password: string): boolean {
    // let salt = bcrypt.genSaltSync(10);
    // let hash = bcrypt.hashSync(password, salt);
    // console.log(currentEmail, hash);
    // console.log('users:::', this.users);
    const currentUser: User | undefined = this.users.find(
      ({ email }: User) => currentEmail === email
    );
    if (currentUser) {
      this._login$.next(true);
      sessionStorage.setItem('current_user', JSON.stringify(currentUser));
      this.store.set('user', currentUser);
      return true;
    }
    return false;
  }

  logOut() {
    this._login$.next(false);
    this.store.set('user', null);
    localStorage.removeItem('current_user');
    this.router.navigate(['']);
  }

  checkAuthUser() {
    const userAttempt = sessionStorage.getItem('current_user');
    if (userAttempt) {
      this.store.set('user', JSON.parse(userAttempt));
    } else {
      this.store.set('user', null);
    }
  }
}
