import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map, take } from 'rxjs';
import { Group, Post, ResponseComment, User } from 'src/app/models';

import * as fromAuthStore from '../../../../auth/store';
import * as fromDashboardStore from '../../store';

@Component({
  selector: 'news-feed',
  styleUrls: ['news-feed.component.scss'],
  template: `<div>
    <div *ngFor="let group of userSubscriptions | async">
      <posts-view
        [posts]="group | getSubscriptionPosts"
        [group]="group"
        [user]="user$ | async"
        [newsFeed]="true"
        (commentSubmitted)="onCommentSubmitted($event)"
        (deleteComment)="onDeleteComment($event)"
        (deletePost)="onDeletePost($event)"
      ></posts-view>
    </div>
  </div>`,
})
export class NewsFeedComponent implements OnInit {
  user$!: Observable<User | undefined>;
  userSubscriptions!: Observable<Group[]>;
  postsAvailable!: Post[];
  groups$!: Observable<Group[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.user$ = this.store.select(fromAuthStore.getAuthUser);
    this.getUserSubscriptions();
    this.postsAvailable = this.getPostsAvailable();
    this.groups$ = this.store.select(fromDashboardStore.getAllGroups);
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
              map((groups) => {
                return groups.filter((group) =>
                  userGroupsIds?.includes(group.id)
                );
              })
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

  onCommentSubmitted(comment: ResponseComment): void {
    let userOnce!: User;
    this.store
      .select(fromAuthStore.getAuthUser)
      .pipe(take(1))
      .subscribe((user) => {
        if (user) userOnce = user;
      });

    let group_id = comment.post.section.group_id;

    if (userOnce?.id) {
      const commentBody = {
        body: comment.body,
        post_id: comment.post.id,
        user_id: userOnce?.id,
      };
      const sectionId = comment.post.section.id;
      const postId = comment.post.id;
      this.store.dispatch(
        fromDashboardStore.PostComment({
          group_id,
          sectionId,
          postId,
          comment: commentBody,
        })
      );
    }
  }

  onDeletePost({
    postId,
    sectionId,
    groupId,
  }: {
    postId: number;
    sectionId: number;
    groupId: number;
  }): void {
    this.store.dispatch(
      fromDashboardStore.DeletePost({ postId, sectionId, groupId })
    );
  }

  onDeleteComment({
    commentId,
    postId,
    sectionId,
    groupId,
  }: {
    commentId: number;
    postId: number;
    sectionId: number;
    groupId: number;
  }) {
    this.store.dispatch(
      fromDashboardStore.DeleteComment({
        commentId,
        postId,
        sectionId,
        groupId,
      })
    );
  }
}
