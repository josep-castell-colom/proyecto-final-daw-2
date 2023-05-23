import { Injectable } from '@angular/core';

import { createEffect, Actions, ofType } from '@ngrx/effects';
import { exhaustMap, of } from 'rxjs';
import { catchError, map } from 'rxjs';

import * as groupsActions from '../actions/groups.actions';
import * as fromServices from '../../services';
import { Group } from 'src/app/models/group.interface';

@Injectable()
export class GroupsEffects {
  constructor(
    private actions$: Actions,
    private apiService: fromServices.ApiService
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

  postComment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(groupsActions.PostComment),
      exhaustMap((action) => {
        return this.apiService.post('comments', action.comment).pipe(
          map((comment) => ({
            type: groupsActions.POST_COMMENT_SUCCESS,
            group: action.group,
            sectionId: action.sectionId,
            comment,
          })),
          catchError((error) =>
            of({ type: groupsActions.POST_COMMENT_FAIL, error })
          )
        );
      })
    )
  );
}
