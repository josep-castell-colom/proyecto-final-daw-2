import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user.interface';

@Component({
  selector: 'main-header',
  styleUrls: ['./main-header.component.scss'],
  template: `
    <div>
      <h1 class="logo" [routerLink]="['/']">MuSick!</h1>
      <div class="tools">
        <input type="text" placeholder="Search..." />
        <user-nav [user]="user"></user-nav>
      </div>
    </div>
  `,
})
export class MainHeaderComponent {
  @Input()
  user: User | null | undefined;
}
