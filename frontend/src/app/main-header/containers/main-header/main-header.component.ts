import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user.interface';
import { AuthService } from 'src/auth/shared/services/auth.service';

@Component({
  selector: 'main-header',
  styleUrls: ['./main-header.component.scss'],
  template: `
    <div>
      <h1 class="logo" [routerLink]="['/']">AppName</h1>
      <div class="tools">
        <input type="text" placeholder="Search..." />
        <user-nav [user]="user"></user-nav>
      </div>
    </div>
  `,
})
export class MainHeaderComponent implements OnInit {
  @Input()
  user: User | null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // this.authService.currentUser$.subscribe((user) => (this.user = user.value));
  }
}
