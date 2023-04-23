import { Injectable } from '@angular/core';

import { createEffect, Actions, ofType } from '@ngrx/effects';
import { exhaustMap, of } from 'rxjs';
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
      switchMap(() =>
        this.groupsService.getGroups().pipe(
          map((groups) => ({
            type: groupsActions.LOAD_GROUPS_SUCCESS,
            payload: groups,
          })),
          catchError((error) =>
            of({ type: groupsActions.LOAD_GROUPS_FAIL, payload: error })
          )
        )
      )
    )
  );
}
