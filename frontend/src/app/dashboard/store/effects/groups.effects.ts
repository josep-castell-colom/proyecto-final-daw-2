import { Injectable } from '@angular/core';

import { createEffect, Actions, ofType } from '@ngrx/effects';
import { exhaustMap, of, tap } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs';

import { Store } from '@ngrx/store';

import * as groupsActions from '../actions/groups.actions';
import * as authStore from '../../../../auth/store';
import * as fromServices from '../../services';
import { Group } from 'src/app/models/group.interface';

@Injectable()
export class GroupsEffects {
  constructor(
    private actions$: Actions,
    private apiService: fromServices.ApiService,
    private store: Store
  ) {}

  loadGroups$ = createEffect(() =>
    this.actions$.pipe(
      ofType(groupsActions.LOAD_ALL_GROUPS),
      exhaustMap(() =>
        this.apiService.getAll<Group>('groups').pipe(
          map((groups) => ({
            type: groupsActions.LOAD_ALL_GROUPS_SUCCESS,
            groups,
          })),
          catchError((error) =>
            of({ type: groupsActions.LOAD_ALL_GROUPS_FAIL, payload: error })
          )
        )
      )
    )
  );

  loadUserGroups$ = createEffect(() =>
    this.actions$.pipe(
      ofType(groupsActions.LOAD_AUTH_USER_GROUPS),
      exhaustMap(() =>
        this.store.select(authStore.getAuthUser).pipe(
          switchMap((user) => of(user?.groups)),
          map((groups) => ({
            type: groupsActions.LOAD_AUTH_USER_GROUPS_SUCCESS,
            groups,
          })),
          catchError((error) =>
            of({
              type: groupsActions.LOAD_AUTH_USER_GROUPS_FAIL,
              error,
            })
          )
        )
      )
    )
  );
}
