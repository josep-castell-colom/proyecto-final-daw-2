import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from 'src/app/models/user.interface';

@Component({
  selector: 'main-header',
  styleUrls: ['./main-header.component.scss'],
  template: `
    <div>
      <h1 class="logo" [routerLink]="['/']">AppName</h1>
      <div class="tools">
        <input type="text" placeholder="Search..." />
        <user-nav [user$]="user$ | async"></user-nav>
      </div>
    </div>
  `,
})
export class MainHeaderComponent {
  @Input()
  user$: Observable<User | null | undefined>;
}
