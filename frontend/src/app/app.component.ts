import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <div>
      <main-header></main-header>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  title = 'AppName';
}
