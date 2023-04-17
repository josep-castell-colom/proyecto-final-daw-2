import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { Observable, filter } from 'rxjs';
import { User } from 'src/app/models/user.interface';
import { Store } from 'store';

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
    </div>
  </div>`,
})
export class DashboardComponent implements OnInit {
  user$: Observable<User | null>;
  url: string;

  collapsedAside: boolean = false;

  constructor(private store: Store, private router: Router) {}

  ngOnInit() {
    this.user$ = this.store.select('user');
    this.url = this.router.url;
  }

  collapseAsideHandler() {
    this.collapsedAside = !this.collapsedAside;
  }
}
