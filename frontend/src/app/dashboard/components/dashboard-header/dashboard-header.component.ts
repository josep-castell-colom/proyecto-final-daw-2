import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  @Input()
  title: string;

  breadcrumbs: { name: string; url: string }[];

  constructor(private route: Router) {}

  ngOnInit() {
    this.breadcrumbs = this.getBreadcrumbs();
    this.title = this.breadcrumbs[this.breadcrumbs.length - 1].name;
  }

  getBreadcrumbs() {
    const url = this.route.url;
    const urlArray = url
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
