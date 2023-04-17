import { Component, OnDestroy, OnInit } from '@angular/core';
import { Group } from 'src/app/models/group.interface';
import { GroupsService } from './groups.service';
import { Store } from 'store';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user.interface';

@Component({
  selector: 'my-groups',
  styleUrls: ['my-groups.component.scss'],
  template: `<div>
    <div class="group-selector">
      <div
        *ngFor="let group of authUserGroups"
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
export class MyGroupsComponent implements OnInit, OnDestroy {
  user$: Observable<User>;
  groups$: Observable<Group[]>;

  authUserGroups$: Observable<Group[]>;
  authUserGroups: Group[] = [];

  groupSelected$: Observable<Group>;

  constructor(private groupsService: GroupsService, private store: Store) {}

  ngOnInit(): void {
    this.user$ = this.store.select('user');

    this.authUserGroups$ = this.user$.pipe(
      map((user: User) => user?.groups as Group[])
    );

    this.authUserGroups$.subscribe((groups: Group[]) =>
      groups.map((group: Group) => this.authUserGroups.push(group))
    );

    this.groupSelected$ = this.groupsService.get(this.authUserGroups[0].id);

    this.groupSelected$.subscribe(console.log);

    // this.groupsService.fetchGroups();

    // this.groups$ = this.store.select('groups');

    // this.getUserGroups();
  }

  // getUserGroups() {
  //   let groupArray: number[] = [];
  //   this.authUserGroups$.subscribe((groups) =>
  //     groups.map((group) => groupArray.push(group.id))
  //   );

  //   this.subscription = this.groups$
  //     .pipe(
  //       filter((groups) => !!groups),
  //       take(1)
  //     )
  //     .subscribe(({ data }: any) => {
  //       data.forEach((group: Group) => {
  //         if (
  //           groupArray.includes(group.id) &&
  //           !this.authUserGroups.includes(group)
  //         ) {
  //           this.authUserGroups.push(group);
  //         }
  //       });
  //     });
  // }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
