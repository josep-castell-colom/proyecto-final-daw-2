import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/models/group.interface';
import { Store } from '@ngrx/store';

import { getAuthUser } from 'src/auth/store';

@Component({
  selector: 'my-groups',
  styleUrls: ['my-groups.component.scss'],
  template: `<div>
    <div class="group-selector">
      <div
        *ngFor="let group of authUserGroups"
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
  authUserGroups: Group[] | undefined;

  groupSelected: Group;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(getAuthUser).subscribe((user) => {
      if (user) {
        this.authUserGroups = user.groups;
      }
    });
  }

  selectGroup(group: Group) {
    this.groupSelected = group;
  }
}
