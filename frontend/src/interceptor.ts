import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from 'store';

@Injectable({ providedIn: 'root' })
export class Interceptor implements HttpInterceptor {
  token: string | undefined;

  constructor(private store: Store) {
    this.store
      .select('authToken')
      .subscribe((token: any) => (this.token = token));
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let headersConfig;

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
