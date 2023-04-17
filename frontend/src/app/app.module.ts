import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FullCalendarModule } from '@fullcalendar/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AuthModule } from 'src/auth/auth.module';
import { MainHeaderModule } from './main-header/main-header.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Store } from 'store';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from 'src/interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainHeaderModule,
    DashboardModule,
    AuthModule,
    FullCalendarModule,
    FontAwesomeModule,
  ],
  providers: [
    Store,
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
