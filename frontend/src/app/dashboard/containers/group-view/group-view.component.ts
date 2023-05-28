import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/internal/Observable';

import * as dashboardStore from '../../store';
import * as authStore from '../../../../auth/store';

import { Group } from 'src/app/models/group.interface';
import { ResponseComment, User } from 'src/app/models';
import { take } from 'rxjs';

@Component({
  selector: 'group-view',
  styleUrls: ['group-view.component.scss'],
  template: `<div>
    <group-detail
      [group]="group$ | async"
      [collapsedAside]="collapsedAside$ | async"
      (commentSubmitted)="onCommentSubmitted($event)"
    ></group-detail>
  </div>`,
})
export class GroupViewComponent implements OnInit {
  group$!: Observable<Group>;
  loading$: Observable<boolean>;
  loaded$: Observable<boolean>;
  collapsedAside$: Observable<boolean>;
  id: number;

  entities$: any;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.group$ = this.store.select(dashboardStore.getSelectedGroup);
    this.entities$ = this.store.select(dashboardStore.getAllGroupsEntities);
    this.collapsedAside$ = this.store.select(dashboardStore.getCollapsedAside);
  }

  onCommentSubmitted(comment: ResponseComment): void {
    let userOnce!: User;
    this.store
      .select(authStore.getAuthUser)
      .pipe(take(1))
      .subscribe((user) => {
        if (user) userOnce = user;
      });

    if (userOnce?.id) {
      const commentBody = {
        body: comment.body,
        post_id: comment.post.id,
        user_id: userOnce?.id,
      };
      const sectionId = comment.post.section.id;
      const postId = comment.post.id;
      this.store.dispatch(
        dashboardStore.PostComment({
          group_id: comment.post.section.group_id,
          sectionId,
          postId,
          comment: commentBody,
        })
      );
    }
  }
}
