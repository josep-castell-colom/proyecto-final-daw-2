import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/models/group.interface';
import { Observable } from 'rxjs/internal/Observable';
import { User } from 'src/app/models/user.interface';

@Component({
  selector: 'my-groups',
  styleUrls: ['my-groups.component.scss'],
  template: `<div>
    <div class="group-selector">
      <div
        *ngFor="let group of authUserGroups$ | async"
        [routerLink]="[
          '/dashboard',
          { outlets: { group: ['group', group.id] } }
        ]"
        routerLinkActive="active"
      >
        {{ group.name }}
      </div>
    </div>
  </div>`,
})
export class MyGroupsComponent implements OnInit {
  user$: Observable<User>;
  groups$: Observable<Group[]>;

  authUserGroups$: Observable<Group[]>;
  authUserGroups: Group[] = [];

  groupSelected$: Observable<Group>;

  constructor() {}

  ngOnInit(): void {}
}
