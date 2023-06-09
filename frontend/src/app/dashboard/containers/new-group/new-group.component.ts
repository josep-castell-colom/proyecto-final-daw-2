import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';

import { faAdd } from '@fortawesome/free-solid-svg-icons';

import { User } from 'src/app/models';
import { getAuthUser } from 'src/auth/store';
import { AddGroup } from '../../store';

@Component({
  selector: 'new-group',
  styleUrls: ['new-group.component.scss'],
  templateUrl: 'new-group.component.html',
})
export class NewGroupComponent implements OnInit, OnDestroy {
  user$!: Observable<User | undefined>;
  user!: User;
  groupName: string | undefined = 'New Group';
  groupImage: string | undefined;
  groupCity: string | undefined = 'Musictown';
  groupDescription: string | undefined = 'Best group in the world';
  sections: any[];
  members: User[];
  image: string | undefined;

  faAdd = faAdd;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.user$ = this.store.select(getAuthUser);
    this.user$.pipe(takeUntil(this.destroy$)).subscribe((user) => {
      if (user) {
        this.user = user;
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  onSubmitted(): void {
    const group = {
      name: this.groupName,
      image: this.groupImage,
      description: this.groupDescription,
      city: this.groupCity,
    };
    if (this.user) {
      this.store.dispatch(AddGroup({ group, user: this.user }));
    }
  }
}
