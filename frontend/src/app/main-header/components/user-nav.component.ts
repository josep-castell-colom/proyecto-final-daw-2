import { Component, Input } from '@angular/core';

import { User } from 'src/app/models/user.interface';

@Component({
  selector: 'user-nav',
  styleUrls: ['./user-nav.component.scss'],
  template: `
    <div *ngIf="user">
      <a [routerLink]="['/dashboard/news-feed']" id="dashboard">Dashboard</a>
      <div class="profile-picture__wrapper">
        <img
          [routerLink]="['/dashboard/users/', user.id]"
          class="profile-picture"
          [src]="user.image"
          alt="user profile picture"
        />
      </div>
      <a [routerLink]="['/dashboard/users/', user.id]" id="username">{{
        user.name
      }}</a>
    </div>
    <div *ngIf="!user">
      <a [routerLink]="['/auth/login']">Log in</a>
      <a [routerLink]="['/auth/register']">Register</a>
    </div>
  `,
})
export class UserNavComponent {
  @Input() user: User | null | undefined;
}
