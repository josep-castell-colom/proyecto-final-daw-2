import { Component, Input, Output, EventEmitter } from '@angular/core';

import { faNewspaper } from '@fortawesome/free-regular-svg-icons';
import {
  faMusic,
  faCalendarDays,
  faChevronLeft,
  faChevronRight,
  faRightFromBracket,
  faGear,
} from '@fortawesome/free-solid-svg-icons';

import * as authStore from 'src/auth/store';

import { User } from 'src/app/models/user.interface';
import { Store } from '@ngrx/store';

@Component({
  selector: 'main-aside',
  styleUrls: ['main-aside.component.scss'],
  template: ` <div [class.spanHidden]="spanHidden">
    <ul>
      <li
        [routerLink]="['/dashboard/news-feed']"
        routerLinkActive="active"
        (click)="hideGroups()"
      >
        <fa-icon [icon]="faNews" class="main-icon"></fa-icon>
        <span> News feed </span>
        <fa-icon [icon]="faGear" class="gear"></fa-icon>
      </li>
      <li
        [routerLink]="['/dashboard/my-groups']"
        (click)="showGroups()"
        routerLinkActive="active"
      >
        <fa-icon [icon]="faMusic" class="main-icon"></fa-icon>
        <span> My groups </span>
        <fa-icon [icon]="faGear" class="gear"></fa-icon>
      </li>
      <ul class="groups" [class.hidden]="groupsListHidden" *ngIf="user?.groups">
        <li
          *ngFor="let group of user?.groups"
          [routerLink]="['/dashboard/my-groups/', group.id]"
          routerLinkActive="active"
        >
          {{ group.name }}
        </li>
      </ul>
      <li
        [routerLink]="['/dashboard/my-calendar']"
        routerLinkActive="active"
        (click)="hideGroups()"
      >
        <fa-icon [icon]="faCalendar" class="main-icon"></fa-icon>
        <span> My calendar </span>
      </li>
    </ul>
    <ul class="bottom">
      <li class="logout" (click)="logOutHandler()">
        <fa-icon [icon]="faLogOut" class="main-icon"></fa-icon>
        <span>Log Out</span>
      </li>
    </ul>
    <div class="arrow" (click)="collapseAside()">
      <fa-icon *ngIf="!spanHidden" [icon]="faLeft"></fa-icon>
      <fa-icon *ngIf="spanHidden" [icon]="faRight"></fa-icon>
    </div>
  </div>`,
})
export class MainAsideComponent {
  @Input() user: User | null | undefined;

  @Output() collapse = new EventEmitter();

  faNews = faNewspaper;
  faMusic = faMusic;
  faCalendar = faCalendarDays;
  faLeft = faChevronLeft;
  faRight = faChevronRight;
  faLogOut = faRightFromBracket;
  faGear = faGear;

  spanHidden: boolean = false;
  groupsListHidden: boolean = true;

  constructor(private store: Store) {}

  logOutHandler() {
    this.store.dispatch(authStore.LogOut());
  }

  showGroups() {
    this.groupsListHidden = false;
  }

  hideGroups() {
    this.groupsListHidden = true;
  }

  collapseAside() {
    this.spanHidden = !this.spanHidden;
    this.collapse.emit();
  }
}
