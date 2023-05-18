import { Component, Input } from '@angular/core';
import { ResponseComment } from 'src/app/models';

@Component({
  selector: 'post-comment-detail',
  styleUrls: ['post-comment-detail.component.scss'],
  template: `
    <div class="comment">
      <div class="body">
        <div class="user-info">
          <img
            [src]="comment.user.image"
            alt="{{ comment.user.name }} profile picture"
          />
          <a href="#">{{ comment.user.name }}</a
          >:
        </div>
        <div class="message">
          {{ comment.body }}
        </div>
      </div>
    </div>
  `,
})
export class PostCommentDetailComponent {
  @Input() comment: ResponseComment;
}
