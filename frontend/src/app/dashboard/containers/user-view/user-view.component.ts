import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { User } from 'src/app/models';
import { getSelectedUser } from '../../store';
import { faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { getAuthUser } from 'src/auth/store';

@Component({
  selector: 'user-view',
  styleUrls: ['user-view.component.scss'],
  templateUrl: 'user-view.component.html',
})
export class UserViewComponent implements OnInit {
  user$!: Observable<User>;
  user!: User;

  userIsOwner!: boolean;

  faEdit = faPenSquare;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.user$ = this.store.select(getSelectedUser);
    this.user$.subscribe((user) => {
      this.user = user;
      if (user) {
        this.store.select(getAuthUser).subscribe((user) => {
          this.userIsOwner = user?.id === this.user.id;
        });
      }
    });
  }
}
