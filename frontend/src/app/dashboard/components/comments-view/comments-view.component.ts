import { Component, Input } from '@angular/core';
import { PostComment } from 'src/app/models/post-comment.interface';

@Component({
  selector: 'post-comments-view',
  styleUrls: ['comments-view.component.scss'],
  template: `
    <div>
      <div *ngIf="showComments">
        <div *ngFor="let comment of comments" class="comment-wrapper">
          <post-comment-detail [comment]="comment"></post-comment-detail>
        </div>
        <form>
          <input
            type="text"
            name="message"
            [(ngModel)]="message"
            placeholder="Write something..."
          />
          <button type="submit">Send</button>
        </form>
      </div>
      <span class="show-comments" (click)="toggleShowComments()">{{
        showCommentsMessage
      }}</span>
    </div>
  `,
})
export class PostCommentsViewComponent {
  @Input() comments: PostComment[];
  message: string;

  showComments = false;
  showCommentsMessage = 'Show comments...';

  toggleShowComments(): void {
    this.showComments = !this.showComments;
    this.showCommentsMessage = !this.showComments
      ? 'Show comments...'
      : 'Hide comments';
  }
}
