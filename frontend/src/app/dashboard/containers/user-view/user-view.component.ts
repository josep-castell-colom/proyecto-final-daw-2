import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { User } from 'src/app/models';
import { EditUser, getSelectedUser } from '../../store';
import { faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { getAuthUser } from 'src/auth/store';

@Component({
  selector: 'user-view',
  styleUrls: ['user-view.component.scss'],
  templateUrl: 'user-view.component.html',
})
export class UserViewComponent implements OnInit, OnChanges, OnDestroy {
  user$!: Observable<User>;
  user!: User;

  userName: string;
  userLastName: string;
  userMail: string;
  userPhone: string | undefined;
  userAddress: string | undefined;

  userIsOwner!: boolean;
  editing = false;

  faEdit = faPenSquare;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.user$ = this.store.select(getSelectedUser);
    this.user$.pipe(takeUntil(this.destroy$)).subscribe((user) => {
      this.user = user;
      if (user) {
        this.store.select(getAuthUser).subscribe((user) => {
          this.userIsOwner = user?.id === this.user.id;
        });
      }
      this.setInfo();
    });
  }

  ngOnChanges(): void {
    this.setInfo();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  setInfo() {
    if (this.user) {
      this.userName = this.user.name;
      this.userLastName = this.user.lastname;
      this.userMail = this.user.email;
      this.userPhone = this.user.phone;
      this.userAddress = this.user?.address;
    }
  }

  onUserEditSubmit() {
    const user = {
      id: this.user.id,
      name: this.userName,
      lastname: this.userLastName,
      email: this.userMail,
      phone: this.userPhone,
      address: this.userAddress,
    };
    this.store.dispatch(EditUser({ user_id: user.id, user }));
    this.editing = false;
  }

  cancelHandler() {
    this.editing = false;
    this.setInfo();
  }
}
