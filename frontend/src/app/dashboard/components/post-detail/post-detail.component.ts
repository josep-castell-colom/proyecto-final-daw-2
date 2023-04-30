import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'post-detail',
  styleUrls: ['post-detail.component.scss'],
  template: `
    <div class="post">
      <header class="header">
        <h3 class="title">
          {{ post.title }}
        </h3>
        <span>Posted by: {{ post.user.name }}</span>
      </header>
      <div class="content">
        <div *ngIf="post.image">
          <img [src]="post.image" alt="Post image" />
        </div>
        <div class="body">
          <p>
            {{ post.body }}
          </p>
        </div>
      </div>
      <div class="comments">
        <post-comments-view [comments]="post.comments"></post-comments-view>
      </div>
    </div>
  `,
})
export class PostDetailComponent {
  @Input() post: Post;
}
