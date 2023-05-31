import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Store } from '@ngrx/store';
import * as authStore from '../../../auth/store';

import { env } from 'src/env';

import { Observable, map, take } from 'rxjs';
import { Group, Post, ResponseComment, User } from 'src/app/models';

@Injectable({
  providedIn: 'root',
})
export class GroupsService {
  constructor(private http: HttpClient, private store: Store) {}

  getGroups(): Observable<Group[]> {
    return this.http
      .get<Group[]>(`${env.API_URL}/groups`)
      .pipe(map((response: any) => response.data));
  }

  get(groupId: number): Observable<Group> {
    return this.http
      .get<Group>(`${env.API_URL}/groups/${groupId}`)
      .pipe(map((response: any) => response.data));
  }

  getUser(): User {
    let userOnce!: User;
    this.store
      .select(authStore.getAuthUser)
      .pipe(take(1))
      .subscribe((user) => {
        if (user) userOnce = user;
      });
    return userOnce;
  }

  checkUserIsOwner(
    user: User | null | undefined,
    target: ResponseComment | Post
  ): boolean {
    return user?.id === target.user.id;
  }
}
