import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Interceptor implements HttpInterceptor {
  token: string | null;

  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let headersConfig;
    this.token = sessionStorage.getItem('authToken');

    if (this.token) {
      headersConfig = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${this.token}`,
      };
    } else {
      headersConfig = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      };
    }

    const request = req.clone({ setHeaders: headersConfig });
    return next.handle(request);
  }
}
