import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output() postSubmitted = new EventEmitter<{
    title: string;
    body: string;
    image?: string;
  }>();

  title = '';
  body = '';
  image = '';

  onSubmit(): void {
    this.postSubmitted.emit({
      title: this.title,
      body: this.body,
      image: this.image,
    });
  }
}
