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
  @Output() commentSubmitted = new EventEmitter();
  selectedSection: number = 0;

  selectSection(querySection: Section): void {
    if (this.group) {
      const indexFound = this.group?.sections.findIndex(
        (section) => section.id === querySection.id
      );
      if (indexFound !== -1) this.selectedSection = indexFound;
    }
  }

  onCommentSubmitted(comment: any): void {
    this.commentSubmitted.emit(comment);
  }

  toggleShowPost(): void {
    this.showPostForm = !this.showPostForm;
  }
}
