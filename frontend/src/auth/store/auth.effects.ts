import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { AuthService } from '../shared/services/auth.service';

import * as actions from './auth.actions';
import { LoadAllUsers, getAllUsers } from 'src/app/dashboard/store';
import { catchError, exhaustMap, find, map, of, switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

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

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.Register),
      exhaustMap((action) => {
        return this.authService.register(action.email, action.password).pipe(
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
      switchMap(() =>
        this.authService.getAuthUser().pipe(
          switchMap((authUser) => {
            this.store.dispatch(LoadAllUsers());
            const userOut = this.store
              .select(getAllUsers)
              .pipe(
                map((users) => users.find((user) => user.id === authUser.id))
              );
            return userOut;
          }),
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

  loginFail$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(actions.LoginFail),
        tap(() => {
          this.router.navigate(['/']);
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
    private router: Router,
    private store: Store
  ) {}
}
