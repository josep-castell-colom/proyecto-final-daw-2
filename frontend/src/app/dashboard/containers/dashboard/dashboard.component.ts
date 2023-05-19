import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.interface';
import { Store } from '@ngrx/store';

import * as fromDashboardStore from '../../store';
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
      <dashboard-header [group]="selectedGroup"></dashboard-header>
      <router-outlet></router-outlet>
    </div>
  </div>`,
})
export class DashboardComponent implements OnInit {
  user$: Observable<User | undefined>;
  url: string;
  groups$: Observable<Group[]>;
  selectedGroup!: Group;

  collapsedAside: boolean = false;

  constructor(
    private store: Store<fromDashboardStore.DashboardState>,
    private router: Router
  ) {}

  ngOnInit() {
    this.user$ = this.store.select(fromAuthStore.getAuthUser);
    this.url = this.router.url;
    this.store.dispatch(fromDashboardStore.LoadAllGroups());
    this.groups$ = this.store.select(fromDashboardStore.getAllGroups);
    this.store
      .select(fromDashboardStore.getSelectedGroup)
      .subscribe((group) => (this.selectedGroup = group));
  }

  collapseAsideHandler() {
    this.collapsedAside = !this.collapsedAside;
  }
}
