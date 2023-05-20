import { Injectable } from '@angular/core';

import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { exhaustMap, map, catchError } from 'rxjs/operators';

import { Store } from '@ngrx/store';

import * as groupActions from '../actions/group.actions';
import { ApiService } from '../../services';

@Injectable()
export class GroupEffects {
  constructor(private actions$: Actions, private apiService: ApiService) {}

  postComment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(groupActions.PostComment),
      exhaustMap((action) => {
        return this.apiService.post('comments', action.comment).pipe(
          map((comment) => ({
            type: groupActions.POST_COMMENT_SUCCESS,
            group: action.group,
            sectionId: action.sectionId,
            comment,
          })),
          catchError((error) =>
            of({ type: groupActions.POST_COMMENT_FAIL, error })
          )
        );
      })
    )
  );
}
