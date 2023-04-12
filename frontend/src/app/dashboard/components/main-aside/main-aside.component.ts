import { Component } from '@angular/core';

@Component({
  selector: 'main-aside',
  styleUrls: ['main-aside.component.scss'],
  template: ` <div>
    <ul>
      <li [routerLink]="['news']" routerLinkActive="active">News feed</li>
      <li [routerLink]="['mygroups']" routerLinkActive="active">My groups</li>
      <li>My calendar</li>
    </ul>
  </div>`,
})
export class MainAsideComponent {}
