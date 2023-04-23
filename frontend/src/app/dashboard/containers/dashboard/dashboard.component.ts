import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { Observable, filter } from 'rxjs';
import { User } from 'src/app/models/user.interface';
// import { Store } from 'store';
import { Store } from '@ngrx/store';

import * as fromGroupsStore from '../../store';
import * as fromAuthStore from '../../../../auth/store';
import { Group } from 'src/app/models/group.interface';

@Component({
  selector: 'dashboard',
  styleUrls: ['dashboard.component.scss'],
  template: ` <div>
    <main-aside
      [user]="user$ | async"
      (collapse)="collapseAsideHandler()"
    ></main-aside>
    <div class="pane" [class.collapsedAside]="collapsedAside">
      <dashboard-header></dashboard-header>
      <router-outlet></router-outlet>
      <router-outlet name="group"></router-outlet>
      <p *ngFor="let group of groups$ | async">{{ group.name }}</p>
    </div>
  </div>`,
})
export class DashboardComponent implements OnInit {
  user$: Observable<User | undefined>;
  url: string;
  groups$: Observable<Group[]>;

  collapsedAside: boolean = false;

  constructor(
    private store: Store<fromGroupsStore.DashboardState>,
    private router: Router
  ) {}

  ngOnInit() {
    // this.user$ = this.store.select('user').pipe(filter((user: any) => !!user));
    this.user$ = this.store.select(fromAuthStore.getAuthUser);
    this.url = this.router.url;
    this.groups$ = this.store.select(fromGroupsStore.getGroups);
    this.store.dispatch(fromGroupsStore.LoadGroups());
  }

  collapseAsideHandler() {
    this.collapsedAside = !this.collapsedAside;
  }
}
