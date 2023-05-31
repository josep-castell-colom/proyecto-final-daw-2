import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { faAdd } from '@fortawesome/free-solid-svg-icons';

import { User } from 'src/app/models';
import { getAuthUser } from 'src/auth/store';
import { AddGroup } from '../../store';

@Component({
  selector: 'new-group',
  styleUrls: ['new-group.component.scss'],
  templateUrl: 'new-group.component.html',
})
export class NewGroupComponent implements OnInit {
  user$!: Observable<User | undefined>;
  groupName: string | undefined = 'New Group';
  groupImage: string | undefined;
  groupCity: string | undefined = 'Musictown';
  groupDescription: string | undefined = 'Best group in the world';
  sections: any[];
  members: User[];
  image: string | undefined;

  faAdd = faAdd;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.user$ = this.store.select(getAuthUser);
  }

  onSubmitted(): void {
    const group = {
      name: this.groupName,
      image: this.groupImage,
      description: this.groupDescription,
      city: this.groupCity,
    };
    this.store.dispatch(AddGroup({ group }));
  }
}
