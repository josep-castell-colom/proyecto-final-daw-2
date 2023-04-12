import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  styleUrls: ['dashboard.component.scss'],
  template: ` <div>
    <main-aside></main-aside>
    <router-outlet></router-outlet>
  </div>`,
})
export class DashboardComponent {}
