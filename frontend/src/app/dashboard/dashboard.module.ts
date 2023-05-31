import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromStore from './store';

import { FullCalendarModule } from '@fullcalendar/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { NewGroupComponent } from './containers/new-group/new-group.component';
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
import { PostFormComponent } from './components/post-form/post-form.component';
import { GetSubscriptionPostsPipe } from '../pipes/get-subscription-posts.pipe';
import { CheckSectionVisibilityPipe } from '../pipes/check-section-visibility.pipe';
import { UserViewComponent } from './containers/user-view/user-view.component';
import { CheckUserIsMemberPipe } from '../pipes/check-member.pipe';
import { GetInitialsPipe } from '../pipes/get-initials.pipe';

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
        children: [
          {
            path: ':id',
            component: GroupViewComponent,
          },
        ],
      },
      {
        path: 'new-group',
        component: NewGroupComponent,
      },
      {
        path: 'my-calendar',
        component: MyCalendarComponent,
      },
      {
        path: 'groups/:id',
        component: GroupViewComponent,
      },
      {
        path: 'users/:id',
        component: UserViewComponent,
      },
    ],
  },
  // {
  //   path: '**',
  //   redirectTo: '/dashboard',
  // },
];

@NgModule({
  declarations: [
    CheckSectionVisibilityPipe,
    CheckUserIsMemberPipe,
    DashboardComponent,
    DashboardHeaderComponent,
    GetInitialsPipe,
    GetSubscriptionPostsPipe,
    GroupDetailComponent,
    GroupViewComponent,
    MainAsideComponent,
    MyCalendarComponent,
    MyGroupsComponent,
    NewsFeedComponent,
    NewGroupComponent,
    PostsViewComponent,
    PostDetailComponent,
    PostCommentsViewComponent,
    PostCommentDetailComponent,
    PostFormComponent,
    UserViewComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('dashboard', fromStore.reducers),
    FullCalendarModule,
    FontAwesomeModule,
    EffectsModule.forFeature(fromStore.effects),
  ],
  exports: [DashboardHeaderComponent],
})
export class DashboardModule {}
