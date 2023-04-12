import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from 'src/app/models/User.interface';
import { Observable } from 'rxjs';

const API_URL: string = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>(`${API_URL}/users`);
  }

  logIn(email: string, password: string) {
    let params = new HttpParams();
    params = params.append('email', email);
    params = params.append('password', password);
    return this.http.get(`${API_URL}/users`, {
      params: params,
    }) as Observable<User>;
  }
}
