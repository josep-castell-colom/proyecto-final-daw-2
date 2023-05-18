import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Group } from 'src/app/models/group.interface';

import { Observable } from 'rxjs/internal/Observable';

import * as dashboardStore from '../../store';
import * as authStore from '../../../../auth/store';
import { ResponseComment } from 'src/app/models';

@Component({
  selector: 'group-view',
  styleUrls: ['group-view.component.scss'],
  template: `<div>
    <div *ngIf="loading$ | async">Loading...</div>
    <group-detail
      *ngIf="loaded$ | async"
      [group]="group$ | async"
      (commentSubmitted)="onCommentSubmitted($event)"
    ></group-detail>
  </div>`,
})
export class GroupViewComponent implements OnInit {
  group$: Observable<Group>;
  loading$: Observable<boolean>;
  loaded$: Observable<boolean>;
  id: number;

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.id = parseInt(id);
      }
    });

    this.loading$ = this.store.select(dashboardStore.getSelectedGroupLoading);
    this.loaded$ = this.store.select(dashboardStore.getSelectedGroupLoaded);
    this.group$ = this.store.select(dashboardStore.getSelectedGroup);
    this.store.dispatch(dashboardStore.LoadGroup({ id: this.id }));
  }

  onCommentSubmitted(comment: ResponseComment): void {
    this.store.select(authStore.getAuthUser).subscribe((user) => {
      if (user?.id) {
        const commentBody = {
          body: comment.body,
          post_id: comment.post.id,
          user_id: user?.id,
        };
        const sectionId = comment.post.section.id;
        const postId = comment.post.id;
        this.store.dispatch(
          dashboardStore.PostComment({
            comment: commentBody,
            sectionId,
            postId,
          })
        );
      }
    });
  }
}
