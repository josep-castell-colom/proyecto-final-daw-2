import { Injectable } from '@angular/core';

import { createEffect, Actions, ofType } from '@ngrx/effects';
import { exhaustMap, of, tap } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs';

import * as groupsActions from '../actions/groups.action';
import * as fromServices from '../../services';

@Injectable()
export class GroupsEffects {
  constructor(
    private actions$: Actions,
    private groupsService: fromServices.GroupsService
  ) {}

  loadGroups$ = createEffect(() =>
    this.actions$.pipe(
      ofType(groupsActions.LOAD_GROUPS),
      exhaustMap(() =>
        this.groupsService.getGroups().pipe(
          map((groups) => ({
            type: groupsActions.LOAD_GROUPS_SUCCESS,
            groups,
          })),
          catchError((error) =>
            of({ type: groupsActions.LOAD_GROUPS_FAIL, payload: error })
          )
        )
      )
    )
  );

  // loadGroupsSuccess$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(groupsActions.LOAD_GROUPS_SUCCESS),
  //     exhaustMap((action) => )
  //   )
  // )
}
