import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { MainAsideComponent } from './components/main-aside/main-aside.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { MyGroupsComponent } from './components/my-groups/my-groups.component';

export const ROUTES: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: NewsFeedComponent,
      },
      {
        path: 'news',
        component: NewsFeedComponent,
      },
      {
        path: 'mygroups',
        component: MyGroupsComponent,
      },
    ],
  },
  {
    path: 'dashboard/**',
    redirectTo: 'dashboard/news',
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
    MainAsideComponent,
    NewsFeedComponent,
    MyGroupsComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  exports: [],
  providers: [],
})
export class DashboardModule {}
