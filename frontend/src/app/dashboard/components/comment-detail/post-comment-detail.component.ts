import { Component, Input } from '@angular/core';
import { ResponseComment } from 'src/app/models';

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
          >:
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
}
