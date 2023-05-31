import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, map, takeUntil } from 'rxjs';
import { Group, User } from 'src/app/models';
import { getAuthUser } from 'src/auth/store';
import { getAllGroups } from '../../store';

@Component({
  selector: 'my-groups',
  styleUrls: ['my-groups.component.scss'],
  templateUrl: 'my-groups.component.html',
})
export class MyGroupsComponent implements OnInit, OnChanges, OnDestroy {
  authUserGroups$!: Observable<Group[]>;
  user$!: Observable<User | undefined>;
  user!: User | undefined;

  constructor(private store: Store) {}

  private destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnInit(): void {
    this.user$ = this.store.select(getAuthUser);
    this.user$
      .pipe(takeUntil(this.destroy$))
      .subscribe((user) => (this.user = user));
    if (this.user) {
      const userGroupsIds = this.user.groups?.map((group) => {
        return group.id;
      });
      if (userGroupsIds) {
        this.authUserGroups$ = this.store.select(getAllGroups).pipe(
          map((groups) => {
            return groups.filter((group) => userGroupsIds?.includes(group.id));
          })
        );
      }
    }
  }

  ngOnChanges(): void {
    if (this.user) {
      const userGroupsIds = this.user.groups?.map((group) => {
        return group.id;
      });
      if (userGroupsIds) {
        this.authUserGroups$ = this.store.select(getAllGroups).pipe(
          map((groups) => {
            return groups.filter((group) => userGroupsIds?.includes(group.id));
          })
        );
      }
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
