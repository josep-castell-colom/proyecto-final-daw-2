import { Component, Input, OnDestroy } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Group } from 'src/app/models';
import { Breadcrumb } from 'src/app/models/breadcrumb.interface';

@Component({
  selector: 'dashboard-header',
  styleUrls: ['dashboard-header.component.scss'],
  template: `<div [class.collapsedAside]="collapsedAside">
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
export class DashboardHeaderComponent implements OnDestroy {
  @Input() group!: Group | null;
  @Input() collapsedAside!: boolean | null;

  title: string;

  url: string;
  subscription: Subscription;

  breadcrumbs: Breadcrumb[];

  constructor(private router: Router) {
    this.subscription = this.router.events
      .pipe(filter((e) => e instanceof RouterEvent))
      .subscribe((e: any) => {
        setTimeout(() => {
          this.urlChangesHanler(e.url);
        });
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  urlChangesHanler(url: string): void {
    if (url !== '/') {
      this.url = url;
      this.breadcrumbs = this.getBreadcrumbs();
      this.title = this.breadcrumbs[this.breadcrumbs.length - 1].name;
    }
  }

  getBreadcrumbs(): Breadcrumb[] {
    const urlArray = this.url
      .split('/')
      .map((string: string) => string.replace(/[:()]/, ''))
      .map((string: string) => string.replace('groupgroup', ''))
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
    this.setGroupName(urlArray);
    return urlArray;
  }

  setGroupName(urlArray: Breadcrumb[]) {
    if (
      urlArray.length > 2 &&
      urlArray[urlArray.length - 2].name === 'my groups' &&
      this.group
    ) {
      urlArray[urlArray.length - 1].name = this.group.name;
    }
  }
}
