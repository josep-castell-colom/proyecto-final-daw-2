import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { User } from 'src/app/models';
import { EditUser, getSelectedUser } from '../../store';

@Component({
  selector: 'user-update',
  styleUrls: ['user-update.component.scss'],
  templateUrl: 'user-update.component.html',
})
export class UserUpdateComponent implements OnInit, OnChanges, OnDestroy {
  user$!: Observable<User>;
  user!: User;

  userName: string;
  userLastName: string;
  userMail: string;
  userPhone: string | undefined;
  userAddress: string | undefined;

  formValid = true;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.user$ = this.store.select(getSelectedUser);
    this.user$
      .pipe(takeUntil(this.destroy$))
      .subscribe((user) => (this.user = user));
    this.setInfo();
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
    if (this.checkValidForm(user)) {
      this.formValid = true;
      this.store.dispatch(EditUser({ user_id: user.id, user }));
    } else {
      this.formValid = false;
      this.cancelHandler();
    }
  }

  checkValidForm(user: any): boolean {
    if (
      user.name &&
      user.name !== '' &&
      user.lastname &&
      user.lastname !== '' &&
      user.email &&
      user.email !== '' &&
      user.phone &&
      user.phone !== '' &&
      user.address &&
      user.address !== ''
    ) {
      return true;
    }
    return false;
  }

  cancelHandler() {
    this.setInfo();
  }
}
