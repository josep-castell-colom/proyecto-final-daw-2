import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Group } from 'src/app/models/group.interface';
import { Section } from 'src/app/models/section.interface';

@Component({
  selector: 'group-detail',
  styleUrls: ['group-detail.component.scss'],
  template: `<div *ngIf="group">
    <div class="section-selector">
      <div *ngFor="let section of group.sections">
        <div (click)="selectSection(section)">{{ section.name }}</div>
      </div>
    </div>
    <div *ngIf="group.sections[selectedSection].posts" class="selected-section">
      <posts-view
        [posts]="group.sections[selectedSection].posts"
        (commentSubmitted)="onCommentSubmitted($event)"
      ></posts-view>
    </div>
  </div>`,
})
export class GroupDetailComponent {
  @Input() group: Group | null;
  selectedSection: number = 0;
  @Output() commentSubmitted = new EventEmitter();

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
}
