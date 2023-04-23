import { Injectable } from '@angular/core';
import { env } from 'src/env';
import { HttpClient } from '@angular/common/http';
import { Group } from 'src/app/models/group.interface';
import { Store } from 'store';
import { Observable, catchError, filter, map, of, switchMap, tap } from 'rxjs';
import { User } from 'src/app/models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class GroupsService {
  constructor(private http: HttpClient, private store: Store) {}

  getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(`${env.API_URL}/groups`);
  }

  getAuthUserGroups(): Observable<Group[]> {
    return this.store.select('user').pipe(
      filter((user) => !!user),
      map((user: any) => user?.data.groups as Group[])
    );
  }

  get(groupId: number): Observable<Group> {
    return this.http.get<Group>(`${env.API_URL}/groups/${groupId}`);
  }
}
