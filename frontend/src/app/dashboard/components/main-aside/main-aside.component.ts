import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';

import { faNewspaper } from '@fortawesome/free-regular-svg-icons';
import {
  faMusic,
  faCalendarDays,
  faChevronLeft,
  faChevronRight,
  faRightFromBracket,
  faAdd,
} from '@fortawesome/free-solid-svg-icons';

import * as authStore from 'src/auth/store';

import { User } from 'src/app/models/user.interface';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { Group } from 'src/app/models';
import { getAllGroups } from '../../store';
import { Router } from '@angular/router';

@Component({
  selector: 'main-aside',
  styleUrls: ['main-aside.component.scss'],
  templateUrl: 'main-aside.component.html',
})
export class MainAsideComponent implements OnChanges {
  @Input() user: User | null | undefined;
  @Input() groups: Group[] | undefined;

  @Output() collapse = new EventEmitter();

  authUserGroups$!: Observable<Group[] | undefined>;

  faNews = faNewspaper;
  faMusic = faMusic;
  faCalendar = faCalendarDays;
  faLeft = faChevronLeft;
  faRight = faChevronRight;
  faLogOut = faRightFromBracket;
  faGear = faAdd;

  spanHidden: boolean = false;
  groupsListHidden: boolean = true;

  constructor(private store: Store, private router: Router) {}

  ngOnChanges(): void {
    if (this.user) {
      const userGroupsIds = this.user.groups?.map((group) => {
        return group.id;
      });
      if (userGroupsIds) {
        this.authUserGroups$ = this.store.select(getAllGroups).pipe(
          map((groups) => {
            return groups.filter((group) => userGroupsIds?.includes(group.id));
          })
        );
      }
    }
  }

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

  goToNewGroupHandler(event: Event) {
    event.stopPropagation();
    this.router.navigate(['/dashboard/new-group']);
  }
}
