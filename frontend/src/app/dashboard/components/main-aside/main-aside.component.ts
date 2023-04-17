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

import { AuthService } from 'src/auth/shared/services/auth.service';

import { User } from 'src/app/models/user.interface';

@Component({
  selector: 'main-aside',
  styleUrls: ['main-aside.component.scss'],
  template: ` <div [class.spanHidden]="spanHidden">
    <ul>
      <li
        [routerLink]="['news-feed', { outlets: { group: null } }]"
        routerLinkActive="active"
        (click)="hideGroups()"
      >
        <fa-icon [icon]="faNews" class="main-icon"></fa-icon>
        <span> News feed </span>
        <fa-icon [icon]="faGear" class="gear"></fa-icon>
      </li>
      <li
        [routerLink]="['my-groups']"
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
          [routerLink]="[
            '/dashboard',
            { outlets: { group: ['group', group.id] } }
          ]"
          routerLinkActive="active"
        >
          {{ group.name }}
        </li>
      </ul>
      <li
        [routerLink]="['my-calendar']"
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
  faNews = faNewspaper;
  faMusic = faMusic;
  faCalendar = faCalendarDays;
  faLeft = faChevronLeft;
  faRight = faChevronRight;
  faLogOut = faRightFromBracket;
  faGear = faGear;

  spanHidden: boolean = false;
  groupsListHidden: boolean = true;

  @Input()
  user: User | null;

  @Output()
  collapse = new EventEmitter();

  constructor(private authService: AuthService) {}

  logOutHandler() {
    this.authService.logOut();
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
