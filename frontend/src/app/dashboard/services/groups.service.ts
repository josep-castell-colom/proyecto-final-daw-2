import { Injectable } from '@angular/core';
import { env } from 'src/env';
import { HttpClient } from '@angular/common/http';
import { Group } from 'src/app/models/group.interface';
import { Store } from 'store';
import { Observable, catchError, filter, map, of, switchMap, tap } from 'rxjs';

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
}
