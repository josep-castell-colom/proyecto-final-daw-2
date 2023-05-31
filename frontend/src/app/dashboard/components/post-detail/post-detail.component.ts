import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/models';
import { Post } from 'src/app/models/post.interface';
import { GroupsService } from '../../services';

import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'post-detail',
  styleUrls: ['post-detail.component.scss'],
  template: `
    <div class="post">
      <header class="header">
        <h3 class="title">
          {{ post.title }}
        </h3>
        <fa-icon
          [icon]="faTrash"
          *ngIf="checkUserIsOwner(user, post)"
          (click)="onDeletePost()"
        ></fa-icon
        ><br />
        <span
          >Posted by:
          <a [routerLink]="['/dashboard/users/', post.user.id]">{{
            post.user.name
          }}</a></span
        >
      </header>
      <div class="content">
        <div class="image" *ngIf="post.image">
          <img [src]="post.image" alt="Post image" />
        </div>
        <div class="body">
          <p>
            {{ post.body }}
          </p>
        </div>
      </div>
      <div class="comments">
        <post-comments-view
          [comments]="post.comments"
          [user]="user"
          (submitted)="onCommentSubmitted($event)"
          (deleteComment)="onDeleteComment($event)"
        ></post-comments-view>
      </div>
    </div>
  `,
})
export class PostDetailComponent {
  @Input() post: Post;
  @Input() user: User | null | undefined;

  @Output() commentSubmitted = new EventEmitter();
  @Output() deleteComment = new EventEmitter();
  @Output() postDelete = new EventEmitter();

  faTrash = faTrash;

  constructor(private groupsService: GroupsService) {}

  checkUserIsOwner = this.groupsService.checkUserIsOwner;

  onCommentSubmitted(body: string): void {
    this.commentSubmitted.emit({
      body,
      post: this.post,
    });
  }

  onDeleteComment(commentId: number) {
    this.deleteComment.emit({
      commentId,
      postId: this.post.id,
      sectionId: this.post.section.id,
      groupId: this.post.section.group_id,
    });
  }

  onDeletePost() {
    this.postDelete.emit({
      postId: this.post.id,
      sectionId: this.post.section.id,
      groupId: this.post.section.group_id,
    });
  }
}
