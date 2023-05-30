import { Injectable } from '@angular/core';

import { createEffect, Actions, ofType } from '@ngrx/effects';
import { exhaustMap, of, switchMap } from 'rxjs';
import { catchError, map } from 'rxjs';

import * as groupsActions from '../actions/groups.actions';
import * as fromServices from '../../services';
import { Group } from 'src/app/models/group.interface';
import { User } from 'src/app/models';

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

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(groupsActions.LOAD_ALL_USERS),
      exhaustMap(() =>
        this.apiService.getAll<User>('users').pipe(
          map((users) => ({
            type: groupsActions.LOAD_ALL_USERS_SUCCESS,
            users,
          })),
          catchError((error) =>
            of({ type: groupsActions.LOAD_ALL_USERS_FAIL, payload: error })
          )
        )
      )
    )
  );

  postPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(groupsActions.PostPost),
      switchMap((action) => {
        return this.apiService.post('posts', action.post).pipe(
          map((post) => ({
            type: groupsActions.POST_POST_SUCCESS,
            sectionId: action.sectionId,
            groupId: action.groupId,
            post,
          })),
          catchError((error) =>
            of({ type: groupsActions.POST_POST_FAIL, error })
          )
        );
      })
    )
  );

  postComment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(groupsActions.PostComment),
      switchMap((action) => {
        return this.apiService.post('comments', action.comment).pipe(
          map((comment) => ({
            type: groupsActions.POST_COMMENT_SUCCESS,
            group_id: action.group_id,
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

  editGroup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(groupsActions.EditGroup),
      switchMap((action) => {
        return this.apiService
          .patch('groups', action.group_id, action.group)
          .pipe(
            map((group) => ({
              type: groupsActions.EDIT_GROUP_SUCCESS,
              group_id: action.group_id,
              group,
            })),
            catchError((error) =>
              of({ type: groupsActions.EDIT_GROUP_FAIL, error })
            )
          );
      })
    )
  );
}
