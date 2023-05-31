import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { User } from 'src/app/models';
import { Group } from 'src/app/models/group.interface';
import { faPenToSquare, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'group-detail',
  styleUrls: ['group-detail.component.scss'],
  templateUrl: 'group-detail.component.html',
})
export class GroupDetailComponent implements OnInit, OnChanges {
  @Input() group: Group | null;
  @Input() collapsedAside!: boolean | null;
  @Input() selectedSection: number;
  @Input() user!: User | null | undefined;

  @Output() postSubmitted = new EventEmitter<{
    postBody: string;
    postTitle: string;
    groupId: number;
    postImage?: string;
  }>();
  @Output() deletePost = new EventEmitter();
  @Output() commentSubmitted = new EventEmitter();
  @Output() deleteComment = new EventEmitter();
  @Output() groupEditSubmitted = new EventEmitter<{
    groupName: string | undefined;
    groupImage: string | undefined;
    groupCity: string | undefined;
    groupDescription: string | undefined;
  }>();
  @Output() groupFollowed = new EventEmitter<{
    follow: boolean;
    user_id: number;
    group_id: number;
  }>();
  @Output() groupDeleted = new EventEmitter<{ group_id: number }>();

  showPostForm: boolean = false;

  groupName: string | undefined;
  groupImage: string | undefined;
  groupCity: string | undefined;
  groupDescription: string | undefined;
  newSections: any[];

  userIsFollower!: boolean;
  userIsMember!: boolean;
  userIsAdmin!: boolean;
  editingGroupForm = false;

  faEdit = faPenToSquare;
  faAdd = faPlus;

  ngOnInit(): void {
    this.userIsAdmin = this.checkUserIsAdmin();
    this.userIsMember = this.checkUserIsMember();
    this.userIsFollower = this.checkUserIsFollower();
    this.setInfo();
  }

  ngOnChanges(): void {
    this.userIsAdmin = this.checkUserIsAdmin();
    this.userIsMember = this.checkUserIsMember();
    this.userIsFollower = this.checkUserIsFollower();
    this.setInfo();
  }

  setInfo(): void {
    this.groupName = this.group?.name;
    this.groupImage = this.group?.image;
    this.groupCity = this.group?.city;
    this.groupDescription = this.group?.description;
  }

  onPostSubmitted({
    title,
    body,
    image,
  }: {
    title: string;
    body: string;
    image?: string;
  }): void {
    if (this.group) {
      this.postSubmitted.emit({
        postTitle: title,
        postBody: body,
        postImage: image,
        groupId: this.group?.id,
      });
    }
    this.showPostForm = false;
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

  toggleShowPost(): void {
    this.showPostForm = !this.showPostForm;
  }

  checkUserIsFollower(): boolean {
    return this.user?.groups?.find((group) => group.id === this.group?.id)
      ? true
      : false;
  }

  checkUserIsMember(): boolean {
    return this.user?.groups?.find((group) => group.id === this.group?.id)
      ?.pivot.isMember
      ? true
      : false;
  }

  checkUserIsAdmin(): boolean {
    return this.user?.groups?.find((group) => group.id === this.group?.id)
      ?.pivot.isAdmin
      ? true
      : false;
  }

  onEditGroupSubmitted(): void {
    this.groupEditSubmitted.emit({
      groupName: this.groupName,
      groupImage: this.groupImage,
      groupCity: this.groupCity,
      groupDescription: this.groupDescription,
    });
    this.editingGroupForm = false;
  }

  cancelHandler(): void {
    this.editingGroupForm = false;
    this.setInfo();
  }

  followGroup(): void {
    if (this.user?.id && this.group?.id) {
      this.groupFollowed.emit({
        follow: !this.userIsFollower,
        user_id: this.user?.id,
        group_id: this.group?.id,
      });
    }
  }

  deleteGroup(): void {
    if (
      this.group?.id &&
      confirm(`Are you sure to delete ${this.group?.name}?`)
    ) {
      this.groupDeleted.emit({ group_id: this.group?.id });
    }
  }
}
