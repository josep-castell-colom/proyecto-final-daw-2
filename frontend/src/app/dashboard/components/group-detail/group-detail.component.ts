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
    <div *ngIf="selectedSection" class="selected-section">
      <posts-view
        [posts]="selectedSection.posts"
        (commentSubmitted)="onCommentSubmitted($event)"
      ></posts-view>
    </div>
  </div>`,
})
export class GroupDetailComponent {
  @Input() group: Group | null;
  selectedSection: Section;

  @Output() commentSubmitted = new EventEmitter();

  ngOnInit(): void {
    if (this.group?.sections) {
      this.selectedSection = this.group.sections[0];
    }
  }

  selectSection(section: Section): void {
    this.selectedSection = section;
  }

  onCommentSubmitted(comment: any): void {
    this.commentSubmitted.emit(comment);
  }
}
