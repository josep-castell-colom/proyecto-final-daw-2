import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'dashboard-header',
  styleUrls: ['dashboard-header.component.scss'],
  template: `<div>
    <div class="breadcrumbs">
      <span *ngFor="let item of breadcrumbs; last as last">
        <a
          [routerLink]="[item.url]"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }"
          >{{ item.name }}</a
        >
        <span *ngIf="!last"> > </span>
      </span>
    </div>
    <div class="title">
      <h3>{{ title }}</h3>
    </div>
  </div>`,
})
export class DashboardHeaderComponent implements OnInit {
  url: string;

  title: string;

  breadcrumbs: { name: string; url: string }[];

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((e) => e instanceof RouterEvent))
      .subscribe((e: any) => this.urlChangesHanler(e.url));
  }

  ngOnInit() {
    // this.breadcrumbs = this.getBreadcrumbs();
    // this.title = this.breadcrumbs[this.breadcrumbs.length - 1].name;
  }

  urlChangesHanler(url: string) {
    this.url = url;
    this.breadcrumbs = this.getBreadcrumbs();
    this.title = this.breadcrumbs[this.breadcrumbs.length - 1].name;
  }

  getBreadcrumbs() {
    const urlArray = this.url
      .split('/')
      .filter((string: string) => string !== '')
      .map((string: string) => {
        let modString = '';
        for (let i = 0; i < string.length; i++) {
          if (string[i] === '-') {
            modString += ' ';
          } else {
            modString += string[i];
          }
        }
        if (string === 'dashboard')
          return { name: modString, url: '/' + string };
        return { name: modString, url: '/dashboard/' + string };
      });
    return urlArray;
  }
}
