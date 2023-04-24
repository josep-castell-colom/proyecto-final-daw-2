import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { effects } from './store';
import { reducer } from './store/auth.reducer';
import { FEATURE_KEY } from './store';

export const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./login/login.module').then((mod) => mod.LoginModule),
      },
      {
        path: 'register',
        loadChildren: () =>
          import('./register/register.module').then(
            (mod) => mod.RegisterModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule,
    HttpClientModule,
    StoreModule.forFeature(FEATURE_KEY, reducer),
    EffectsModule.forFeature(effects),
    StoreDevtoolsModule,
  ],
  exports: [],
  providers: [HttpClientModule],
})
export class AuthModule {}
