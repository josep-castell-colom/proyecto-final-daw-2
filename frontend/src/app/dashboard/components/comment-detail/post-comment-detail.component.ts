import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ResponseComment, User } from 'src/app/models';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { GroupsService } from '../../services';

@Component({
  selector: 'post-comment-detail',
  styleUrls: ['post-comment-detail.component.scss'],
  template: `
    <div class="comment">
      <div class="body">
        <div class="profile-picture__wrapper">
          <img
            class="profile-picture"
            [src]="comment.user.image"
            alt="{{ comment.user.name }} profile picture"
          />
        </div>
        <div class="message">
          <a [routerLink]="['/dashboard/users/', comment.user.id]">{{
            comment.user.name
          }}</a
          >:<fa-icon
            [icon]="faTrash"
            *ngIf="checkUserIsOwner(user, comment)"
            (click)="onDeleteComment(comment.id)"
          ></fa-icon>
          <div>
            {{ comment.body }}
          </div>
        </div>
      </div>
    </div>
  `,
})
export class PostCommentDetailComponent {
  @Input() comment: ResponseComment;
  @Input() user: User | null | undefined;

  @Output() deleteComment = new EventEmitter();

  faTrash = faTrash;

  checkUserIsOwner = this.groupsService.checkUserIsOwner;

  constructor(private groupsService: GroupsService) {}

  onDeleteComment(commentId: number | undefined): void {
    if (commentId) this.deleteComment.emit(commentId);
  }
}
