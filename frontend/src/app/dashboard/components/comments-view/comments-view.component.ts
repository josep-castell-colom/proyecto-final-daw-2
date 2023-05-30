import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ResponseComment, User } from 'src/app/models';

@Component({
  selector: 'post-comments-view',
  styleUrls: ['comments-view.component.scss'],
  template: `
    <div>
      <div *ngIf="showComments">
        <div *ngFor="let comment of comments" class="comment-wrapper">
          <post-comment-detail
            [comment]="comment"
            [user]="user"
            (deleteComment)="onDeleteComment($event)"
          ></post-comment-detail>
        </div>
        <form (ngSubmit)="onSubmit()">
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
export class PostCommentsViewComponent implements OnInit {
  @Input() comments: ResponseComment[];
  @Input() user: User | null | undefined;

  @Output() submitted = new EventEmitter<string>();
  @Output() deleteComment = new EventEmitter();

  message: string;
  showComments = false;
  showCommentsMessage: string;

  ngOnInit(): void {
    this.showCommentsMessage = `Show ${this.comments.length} comments`;
  }

  toggleShowComments(): void {
    this.showComments = !this.showComments;
    this.showCommentsMessage = !this.showComments
      ? `Show ${this.comments.length} comments`
      : 'Hide comments';
  }

  onSubmit(): void {
    this.submitted.emit(this.message);
  }

  onDeleteComment(commentId: number) {
    this.deleteComment.emit(commentId);
  }
}
