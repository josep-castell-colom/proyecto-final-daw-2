import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'posts-view',
  styleUrls: ['posts-view.component.scss'],
  template: `
    <div>
      <div *ngFor="let post of posts">
        <post-detail [post]="post"></post-detail>
      </div>
    </div>
  `,
})
export class PostsViewComponent {
  @Input() posts: Post[];
}
