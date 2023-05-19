import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/models/group.interface';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';

import * as dashboardStore from '../../store';
import { getAuthUser } from 'src/auth/store';

@Component({
  selector: 'my-groups',
  styleUrls: ['my-groups.component.scss'],
  template: `<div>
    <div class="group-selector">
      <div
        *ngFor="let group of authUserGroups$ | async"
        [routerLink]="['/dashboard/my-groups', group.id]"
        routerLinkActive="active"
      >
        {{ group.name }}
      </div>
    </div>
    <router-outlet></router-outlet>
  </div>`,
})
export class MyGroupsComponent implements OnInit {
  authUserGroups$: Observable<Group[]>;

  groupSelected: Group;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(getAuthUser).subscribe((user) => {
      if (user) {
        this.store.dispatch(dashboardStore.LoadAuthUserGroups());
        this.authUserGroups$ = this.store.select(
          dashboardStore.getAuthUserGroups
        );
      }
    });
  }

  selectGroup(group: Group) {
    this.groupSelected = group;
    console.log(this.groupSelected);
  }
}
