import { Component, Input } from '@angular/core';

import { User } from 'src/app/models/user.interface';

@Component({
  selector: 'user-nav',
  styleUrls: ['./user-nav.component.scss'],
  template: `
    <div *ngIf="user">
      <img [src]="user.image" alt="user profile picture" />
      <a [routerLink]="['/dashboard/news-feed']" id="username">{{
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
  @Input()
  user$: User | null | undefined;
  user: User | null | undefined;

  ngOnChanges(): void {
    if (this.user$) {
      this.user = (this.user$ as any).data;
    }
  }
}
