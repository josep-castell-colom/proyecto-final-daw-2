import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/internal/Observable';

import * as dashboardStore from '../../store';
import * as authStore from '../../../../auth/store';

import { Group } from 'src/app/models/group.interface';
import { ResponseComment } from 'src/app/models';

@Component({
  selector: 'group-view',
  styleUrls: ['group-view.component.scss'],
  template: `<div>
    <group-detail
      [group]="group | async"
      (commentSubmitted)="onCommentSubmitted($event)"
    ></group-detail>
  </div>`,
})
export class GroupViewComponent implements OnInit {
  group!: Observable<Group>;
  loading$: Observable<boolean>;
  loaded$: Observable<boolean>;
  id: number;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.group = this.store.select(dashboardStore.getSelectedGroup);
  }

  onCommentSubmitted(comment: ResponseComment): void {
    this.store.select(authStore.getAuthUser).subscribe((user) => {
      if (user?.id) {
        this.group.subscribe((group) => {
          const commentBody = {
            body: comment.body,
            post_id: comment.post.id,
            user_id: user?.id,
          };
          const sectionId = comment.post.section.id;
          const postId = comment.post.id;
          this.store.dispatch(
            dashboardStore.PostComment({
              group,
              sectionId,
              postId,
              comment: commentBody,
            })
          );
        });
      }
    });
  }
}
