import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { Group, Post, User } from 'src/app/models';

import * as fromAuthStore from '../../../../auth/store';
import * as fromDashboardStore from '../../store';

@Component({
  selector: 'news-feed',
  styleUrls: ['news-feed.component.scss'],
  template: `<div>
    <posts-view [posts]="postsAvailable"></posts-view>
  </div>`,
})
export class NewsFeedComponent implements OnInit {
  user$!: Observable<User | undefined>;
  userSubscriptions!: Observable<Group[]>;
  postsAvailable!: Post[];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.user$ = this.store.select(fromAuthStore.getAuthUser);
    this.getUserSubscriptions();
    this.postsAvailable = this.getPostsAvailable();
  }

  getUserSubscriptions(): void {
    this.user$.subscribe((user) => {
      if (user) {
        const userGroupsIds = user.groups?.map((group) => {
          return group.id;
        });
        if (userGroupsIds) {
          this.userSubscriptions = this.store
            .select(fromDashboardStore.getAllGroups)
            .pipe(
              map((groups) =>
                groups.filter((group) => userGroupsIds?.includes(group.id))
              )
            );
        }
      }
    });
  }

  getPostsAvailable(): Post[] {
    const postsAvailable: Post[] = [];
    if (this.userSubscriptions) {
      this.userSubscriptions.subscribe((groups) => {
        groups.map((group) => {
          group.sections.map((section) => {
            if (section.isPublic) {
              section.posts.forEach((post) => {
                postsAvailable.push(post);
              });
            }
          });
        });
      });
    }
    return postsAvailable;
  }
}
