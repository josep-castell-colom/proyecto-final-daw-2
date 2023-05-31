import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/models';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'posts-view',
  styleUrls: ['posts-view.component.scss'],
  template: `
    <div>
      <div *ngFor="let post of posts">
        <post-detail
          [post]="post"
          [user]="user"
          (commentSubmitted)="onCommentSubmitted($event)"
          (deleteComment)="onDeleteComment($event)"
          (postDelete)="onDeletePost($event)"
        ></post-detail>
      </div>
    </div>
  `,
})
export class PostsViewComponent {
  @Input() posts: Post[] | null;
  @Input() user: User | null | undefined;

  @Output() commentSubmitted = new EventEmitter();
  @Output() deleteComment = new EventEmitter();
  @Output() deletePost = new EventEmitter();

  onCommentSubmitted(comment: any): void {
    this.commentSubmitted.emit(comment);
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
    this.deleteComment.emit({ commentId, postId, sectionId, groupId });
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
    this.deletePost.emit({ postId, sectionId, groupId });
  }
}
