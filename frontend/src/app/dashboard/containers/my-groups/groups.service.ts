import { Injectable } from '@angular/core';
import { env } from 'src/env';
import { HttpClient } from '@angular/common/http';
import { Group } from 'src/app/models/group.interface';
import { Store } from 'store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GroupsService {
  constructor(private http: HttpClient, private store: Store) {}

  fetchGroups() {
    this.http
      .get<Group[]>(`${env.API_URL}/groups`)
      .subscribe((groups) => this.store.set('groups', groups));
  }

  get(groupId: number): Observable<Group> {
    return this.http.get<Group>(`${env.API_URL}/groups/${groupId}`);
  }
}
