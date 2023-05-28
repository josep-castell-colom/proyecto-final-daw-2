import { Component, Input } from '@angular/core';
import { Section } from 'src/app/models';

@Component({
  selector: 'post-form',
  styleUrls: ['post-form.component.scss'],
  templateUrl: 'post-form.component.html',
})
export class PostFormComponent {
  @Input() showPostForm!: boolean;
  @Input() collapsedAside!: boolean | null;
  @Input() selectedSection!: Section;
}
