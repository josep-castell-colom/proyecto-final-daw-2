import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User.interface';

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
  // user: User = {
  //   id: 1,
  //   name: 'Josep',
  //   lastname: 'Castell',
  //   email: 'josep@hola.com',
  //   password: 'hola',
  // };
  user: User;

  constructor() {}

  ngOnInit(): void {}
}
