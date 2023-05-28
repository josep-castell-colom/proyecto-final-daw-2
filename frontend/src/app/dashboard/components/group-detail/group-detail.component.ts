import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Group } from 'src/app/models/group.interface';
import { Section } from 'src/app/models/section.interface';

@Component({
  selector: 'group-detail',
  styleUrls: ['group-detail.component.scss'],
  templateUrl: 'group-detail.component.html',
})
export class GroupDetailComponent {
  @Input() group: Group | null;
  @Input() showPostForm: boolean = false;
  @Input() collapsedAside!: boolean | null;
  @Output() postSubmitted = new EventEmitter<{
    postBody: string;
    postTitle: string;
    sectionId: number;
    groupId: number;
    postImage?: string;
  }>();
  @Output() commentSubmitted = new EventEmitter();
  selectedSection: number = 0;
  selectedSectionId!: number | undefined;

  ngOnInit(): void {
    this.selectedSectionId = this.group?.sections[0].id;
  }

  selectSection(querySection: Section): void {
    if (this.group) {
      const indexFound = this.group?.sections.findIndex(
        (section) => section.id === querySection.id
      );
      if (indexFound !== -1) {
        this.selectedSection = indexFound;
        this.selectedSectionId = querySection.id;
      }
    }
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
    if (this.group && this.selectedSectionId) {
      this.postSubmitted.emit({
        postTitle: title,
        postBody: body,
        postImage: image,
        groupId: this.group?.id,
        sectionId: this.selectedSectionId,
      });
    }
  }

  onCommentSubmitted(comment: any): void {
    this.commentSubmitted.emit(comment);
  }

  toggleShowPost(): void {
    this.showPostForm = !this.showPostForm;
  }
}
