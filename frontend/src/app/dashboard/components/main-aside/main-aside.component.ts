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
  templateUrl: 'main-aside.component.html',
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
