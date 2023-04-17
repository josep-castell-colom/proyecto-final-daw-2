import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { Store } from 'store';
import { AuthService } from 'src/auth/shared/services/auth.service';

import { User } from './models/user.interface';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <div>
      <main-header [user]="user$ | async"></main-header>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'AppName';
  user$: Observable<User | null>;

  constructor(private authService: AuthService, private store: Store) {}

  ngOnInit() {
    this.authService.checkAuthUser();
    this.user$ = this.store.select<User>('user');
  }

  ngOnDestroy() {}
}
