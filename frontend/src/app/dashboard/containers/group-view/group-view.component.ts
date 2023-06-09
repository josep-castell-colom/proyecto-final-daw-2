import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/internal/Observable';

import * as dashboardStore from '../../store';
import { getAuthUser } from 'src/auth/store';

import { Group } from 'src/app/models/group.interface';
import {
  GroupUpdate,
  PostRequest,
  ResponseComment,
  Section,
  User,
} from 'src/app/models';
import { GroupsService } from '../../services';

@Component({
  selector: 'group-view',
  styleUrls: ['group-view.component.scss'],
  templateUrl: 'group-view.component.html',
})
export class GroupViewComponent implements OnInit {
  collapsedAside$: Observable<boolean>;
  group$!: Observable<Group>;
  group!: Group;
  id: number;
  loading$: Observable<boolean>;
  loaded$: Observable<boolean>;
  user$!: Observable<User | undefined>;
  user!: User;

  formValid = true;

  selectedSectionIndex: number = -1;
  selectedSectionId!: number | undefined;

  constructor(private store: Store, private groupsService: GroupsService) {}

  ngOnInit(): void {
    this.group$ = this.store.select(dashboardStore.getSelectedGroup);
    this.collapsedAside$ = this.store.select(dashboardStore.getCollapsedAside);
    this.user$ = this.store.select(getAuthUser);
    this.group$.subscribe((group) => (this.group = group));
    this.user$.subscribe((user) => {
      if (user) this.user = user;
    });
  }

  checkSectionPrivacity(section: Section): boolean {
    return section.isPublic ||
      this.user.groups?.find((group) => this.group.id === group.id)?.pivot
        .isMember
      ? true
      : false;
  }

  selectSection(querySection: Section): void {
    if (this.group) {
      const indexFound = this.group?.sections.findIndex(
        (section) => section.id === querySection.id
      );
      if (indexFound !== -1) {
        this.selectedSectionIndex = indexFound;
        this.selectedSectionId = querySection.id;
      }
    }
  }

  selectGroupProfile(): void {
    this.selectedSectionIndex = -1;
    this.selectedSectionId = undefined;
  }

  onPostSubmitted({
    postTitle,
    postBody,
    postImage,
    groupId,
  }: {
    postTitle: string;
    postBody: string;
    postImage?: string;
    groupId: number;
  }): void {
    let userOnce = this.groupsService.getUser();

    if (userOnce?.id) {
      if (this.selectedSectionId) {
        let post: PostRequest = {
          title: postTitle,
          body: postBody,
          section_id: this.selectedSectionId,
          user_id: userOnce?.id,
        };
        if (postImage) {
          post.image = postImage;
        }
        this.store.dispatch(
          dashboardStore.PostPost({
            groupId,
            sectionId: this.selectedSectionId,
            post,
          })
        );
      }
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
      dashboardStore.DeletePost({ postId, sectionId, groupId })
    );
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
  }): void {
    this.store.dispatch(
      dashboardStore.DeleteComment({
        commentId,
        sectionId,
        groupId,
        postId,
      })
    );
  }

  onGroupEditSubmitted({
    groupName,
    groupImage,
    groupCity,
    groupDescription,
  }: {
    groupName?: string;
    groupImage?: string;
    groupCity?: string;
    groupDescription?: string;
  }) {
    const group: GroupUpdate = {
      id: this.group.id,
      name: groupName,
      image: groupImage,
      city: groupCity,
      description: groupDescription,
    };
    this.store.dispatch(
      dashboardStore.EditGroup({
        group_id: this.group.id,
        group,
      })
    );
  }

  onGroupDeleted({ group_id }: { group_id: number }) {
    this.store.dispatch(dashboardStore.DeleteGroup({ group_id }));
  }

  onGroupFollowed({
    follow,
    user_id,
    group_id,
  }: {
    follow: boolean;
    user_id: number;
    group_id: number;
  }) {
    this.store.dispatch(
      dashboardStore.FollowGroup({ follow, user_id, group_id })
    );
  }
}
