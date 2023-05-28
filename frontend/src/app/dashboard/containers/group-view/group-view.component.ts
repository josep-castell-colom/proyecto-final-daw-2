import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/internal/Observable';

import * as dashboardStore from '../../store';

import { Group } from 'src/app/models/group.interface';
import { PostRequest, ResponseComment } from 'src/app/models';
import { GroupsService } from '../../services';

@Component({
  selector: 'group-view',
  styleUrls: ['group-view.component.scss'],
  template: `<div>
    <group-detail
      [group]="group$ | async"
      [collapsedAside]="collapsedAside$ | async"
      (postSubmitted)="onPostSubmitted($event)"
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

  constructor(private store: Store, private groupsService: GroupsService) {}

  ngOnInit(): void {
    this.group$ = this.store.select(dashboardStore.getSelectedGroup);
    this.entities$ = this.store.select(dashboardStore.getAllGroupsEntities);
    this.collapsedAside$ = this.store.select(dashboardStore.getCollapsedAside);
  }

  onPostSubmitted({
    postTitle,
    postBody,
    postImage,
    groupId,
    sectionId,
  }: {
    postTitle: string;
    postBody: string;
    postImage?: string;
    groupId: number;
    sectionId: number;
  }): void {
    let userOnce = this.groupsService.getUser();

    if (userOnce?.id) {
      let post: PostRequest;
      if (postImage) {
        post = {
          title: postTitle,
          body: postBody,
          image: postImage,
          section_id: sectionId,
          user_id: userOnce?.id,
        };
      } else {
        post = {
          title: postTitle,
          body: postBody,
          section_id: sectionId,
          user_id: userOnce?.id,
        };
      }
      this.store.dispatch(
        dashboardStore.PostPost({ groupId, sectionId: post.section_id, post })
      );
    }
  }

  onCommentSubmitted(comment: ResponseComment): void {
    let userOnce = this.groupsService.getUser();

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
