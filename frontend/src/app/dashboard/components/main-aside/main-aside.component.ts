import { Component } from '@angular/core';

@Component({
  selector: 'main-aside',
  styleUrls: ['main-aside.component.scss'],
  template: ` <div>
    <ul>
      <li [routerLink]="['news-feed']" routerLinkActive="active">News feed</li>
      <li [routerLink]="['my-groups']" routerLinkActive="active">My groups</li>
      <li [routerLink]="['my-calendar']" routerLinkActive="active">
        My calendar
      </li>
    </ul>
  </div>`,
})
export class MainAsideComponent {}
