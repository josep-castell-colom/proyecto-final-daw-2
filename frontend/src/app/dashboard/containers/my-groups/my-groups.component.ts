import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/models/group.interface';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/internal/Observable';

import { getAuthUser } from 'src/auth/store';
import * as fromDashboardStore from '../../store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'my-groups',
  styleUrls: ['my-groups.component.scss'],
  templateUrl: 'my-groups.component.html',
})
export class MyGroupsComponent implements OnInit {
  authUserGroups!: Observable<Group[] | undefined>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(getAuthUser).subscribe((user) => {
      if (user) {
        const userGroupsIds = user.groups?.map((group) => {
          if (group.pivot.isMember) {
            return group.id;
          }
          return;
        });
        if (userGroupsIds) {
          this.authUserGroups = this.store
            .select(fromDashboardStore.getAllGroups)
            .pipe(
              map((groups) =>
                groups.filter((group) => userGroupsIds?.includes(group.id))
              )
            );
        }
      }
    });
  }
}
