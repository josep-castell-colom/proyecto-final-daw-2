import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromStore from './store';

import { FullCalendarModule } from '@fullcalendar/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// import { MyGroupsModule } from './containers/my-groups/my-groups.module';

import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { MainAsideComponent } from './components/main-aside/main-aside.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { MyGroupsComponent } from './containers/my-groups/my-groups.component';
import { MyCalendarComponent } from './components/my-calendar/my-calendar.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { PostsViewComponent } from './components/posts-view/posts-view.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { GroupViewComponent } from './containers/group-view/group-view.component';
import { GroupDetailComponent } from './components/group-detail/group-detail.component';
import { PostCommentsViewComponent } from './components/comments-view/comments-view.component';
import { PostCommentDetailComponent } from './components/comment-detail/post-comment-detail.component';
import { FormsModule } from '@angular/forms';

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
    GroupDetailComponent,
    PostCommentsViewComponent,
    PostCommentDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('dashboard', fromStore.reducers),
    StoreModule.forFeature(
      fromStore.GROUPS_FEATURE_KEY,
      fromStore.GroupsReducer
    ),
    StoreModule.forFeature(fromStore.GROUP_FEATURE_KEY, fromStore.GroupReducer),
    FullCalendarModule,
    // MyGroupsModule,
    FontAwesomeModule,
    EffectsModule.forFeature(fromStore.effects),
  ],
  exports: [DashboardHeaderComponent],
  providers: [],
})
export class DashboardModule {}
