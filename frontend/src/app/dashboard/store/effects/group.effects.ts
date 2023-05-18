import { Injectable } from '@angular/core';

import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { exhaustMap, map, catchError } from 'rxjs/operators';

import { Store } from '@ngrx/store';

import * as groupActions from '../actions/group.actions';
import { ApiService } from '../../services';

import { Group } from 'src/app/models/group.interface';

@Injectable()
export class GroupEffects {
  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private store: Store
  ) {}

  loadGroup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(groupActions.LoadGroup),
      exhaustMap((action) => {
        return this.apiService.getOne<Group>('groups', action.id).pipe(
          map((group) => ({
            type: groupActions.LOAD_GROUP_SUCCESS,
            group,
          })),
          catchError((error) =>
            of({ type: groupActions.LOAD_GROUP_FAIL, error })
          )
        );
      })
    )
  );

  postComment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(groupActions.PostComment),
      exhaustMap((action) => {
        return this.apiService.post('comments', action.comment).pipe(
          map((comment) => ({
            type: groupActions.POST_COMMENT_SUCCESS,
            comment,
            sectionId: action.sectionId,
          })),
          catchError((error) =>
            of({ type: groupActions.POST_COMMENT_FAIL, error })
          )
        );
      })
    )
  );
}
