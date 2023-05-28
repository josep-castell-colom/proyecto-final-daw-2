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
  templateUrl: 'dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  user$: Observable<User | undefined>;
  url: string;
  groups$: Observable<Group[]>;
  selectedGroup!: Group;

  collapsedAside$!: Observable<boolean>;

  constructor(
    private store: Store<fromDashboardStore.DashboardState>,
    private router: Router
  ) {}

  ngOnInit() {
    this.user$ = this.store.select(fromAuthStore.getAuthUser);
    this.collapsedAside$ = this.store.select(
      fromDashboardStore.getCollapsedAside
    );
    this.url = this.router.url;
    this.store.dispatch(fromDashboardStore.LoadAllGroups());
    this.groups$ = this.store.select(fromDashboardStore.getAllGroups);
    this.store
      .select(fromDashboardStore.getSelectedGroup)
      .subscribe((group) => (this.selectedGroup = group));
  }

  collapseAsideHandler() {
    this.store.dispatch(fromDashboardStore.CollapseAside());
  }
}
