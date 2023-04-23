import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, effects } from './store';

import { GROUPS_FEATURE_KEY, GroupsReducer } from './store';

import { FullCalendarModule } from '@fullcalendar/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// import { MyGroupsModule } from './containers/my-groups/my-groups.module';

import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { MainAsideComponent } from './components/main-aside/main-aside.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { MyGroupsComponent } from './containers/my-groups/my-groups.component';
import { MyCalendarComponent } from './components/my-calendar/my-calendar.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { PostsViewComponent } from './containers/posts-view/posts-view.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { GroupViewComponent } from './components/group-view/group-view.component';

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
        path: 'news-feed',
        component: NewsFeedComponent,
      },
      {
        path: 'my-groups',
        component: MyGroupsComponent,
      },
      {
        path: 'view',
        component: GroupViewComponent,
        outlet: 'group',
      },
      {
        path: 'my-calendar',
        component: MyCalendarComponent,
      },
      {
        path: 'group/:id',
        component: GroupViewComponent,
        outlet: 'group',
      },
    ],
  },
  // {
  //   path: '**',
  //   redirectTo: 'dashboard/news-feed',
  // },
];

@NgModule({
  declarations: [
    DashboardComponent,
    MainAsideComponent,
    NewsFeedComponent,
    MyCalendarComponent,
    DashboardHeaderComponent,
    PostsViewComponent,
    PostDetailComponent,
    MyGroupsComponent,
    GroupViewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('dashboard', reducers),
    StoreModule.forFeature(GROUPS_FEATURE_KEY, GroupsReducer),
    FullCalendarModule,
    // MyGroupsModule,
    FontAwesomeModule,
    EffectsModule.forFeature(effects),
  ],
  exports: [DashboardHeaderComponent],
  providers: [],
})
export class DashboardModule {}
