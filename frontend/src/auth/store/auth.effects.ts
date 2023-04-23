import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { AuthService } from '../shared/services/auth.service';

import * as actions from './auth.actions';
import { catchError, exhaustMap, map, of, switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  setAuthToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.Login),
      exhaustMap((action) => {
        return this.authService.logIn(action.email, action.password).pipe(
          map(({ token }) => {
            this.authService.setToken(token);
            return { type: actions.SET_AUTH_TOKEN, token };
          }),
          catchError((error) => of({ type: actions.LOG_IN_FAIL, error }))
        );
      })
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.SetAuthToken),
      exhaustMap(() =>
        this.authService.getAuthUser().pipe(
          map((user) => ({ type: actions.LOG_IN_SUCCESS, user })),
          catchError((error) => of({ type: actions.LOG_IN_FAIL, error }))
        )
      )
    )
  );

  loginSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(actions.LoginSuccess),
        tap(() => {
          this.router.navigate(['/dashboard']);
        })
      );
    },
    { dispatch: false }
  );

  logOut$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.LogOut),
      exhaustMap(() =>
        of(this.authService.logOut()).pipe(
          map(() => ({ type: actions.LOG_OUT_SUCCESS })),
          catchError((error) => of({ type: actions.LOG_OUT_FAIL, error }))
        )
      )
    )
  );

  logOutSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(actions.LogOutSuccess),
        tap(() => {
          this.router.navigate(['']);
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
