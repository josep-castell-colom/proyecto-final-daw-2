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
  @Output() commentSubmitted = new EventEmitter();
  @Output() groupEditSubmitted = new EventEmitter<{
    groupName: string | undefined;
    groupImage: string | undefined;
    groupCity: string | undefined;
    groupDescription: string | undefined;
  }>();

  showPostForm: boolean = false;

  groupName: string | undefined;
  groupImage: string | undefined;
  groupCity: string | undefined;
  groupDescription: string | undefined;
  newSections: any[];

  userIsAdmin!: boolean;
  editingGroupForm = false;

  faEdit = faPenToSquare;
  faAdd = faPlus;

  ngOnInit(): void {
    this.userIsAdmin = this.checkUserIsAdmin();
    this.groupName = this.group?.name;
    this.groupImage = this.group?.image;
    this.groupCity = this.group?.city;
    this.groupDescription = this.group?.description;
  }

  ngOnChanges(): void {
    this.userIsAdmin = this.checkUserIsAdmin();
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

  onCommentSubmitted(comment: any): void {
    this.commentSubmitted.emit(comment);
  }

  toggleShowPost(): void {
    this.showPostForm = !this.showPostForm;
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
}
