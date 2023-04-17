import { Component, Input } from '@angular/core';
import { Group } from 'src/app/models/group.interface';

@Component({
  selector: 'group-view',
  styleUrls: ['group-view.component.scss'],
  template: `<div>
    <!-- <h1>{{ group.name }}</h1> -->
    <h1>group view</h1>
  </div>`,
})
export class GroupViewComponent {
  @Input()
  group: Group;
}
