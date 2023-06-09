import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, map } from 'rxjs';

import { env } from 'src/env';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  getAll<T>(collection: string): Observable<T[]> {
    return this.http
      .get<T[]>(`${env.API_URL}/${collection}`)
      .pipe(map((response: any) => response.data));
  }

  getOne<T>(collection: string, id: number): Observable<T> {
    return this.http
      .get<T>(`${env.API_URL}/${collection}/${id}`)
      .pipe(map((response: any) => response.data));
  }

  post(collection: string, body: object): Observable<any> {
    return this.http
      .post(`${env.API_URL}/${collection}`, JSON.stringify(body))
      .pipe(map((response: any) => response.data));
  }

  patch(collection: string, id: number, body: object): Observable<any> {
    console.log('test');
    return this.http
      .patch(`${env.API_URL}/${collection}/${id}`, JSON.stringify(body))
      .pipe(map((response: any) => response.data));
  }

  delete(collection: string, id: number): Observable<any> {
    return this.http
      .delete(`${env.API_URL}/${collection}/${id}`)
      .pipe(map((response: any) => response));
  }
}
