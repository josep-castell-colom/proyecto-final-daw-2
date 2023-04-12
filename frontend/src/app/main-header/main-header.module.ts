import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainHeaderComponent } from './containers/main-header/main-header.component';
import { UserNavComponent } from './components/user-nav.component';

@NgModule({
  declarations: [MainHeaderComponent, UserNavComponent],
  imports: [CommonModule, RouterModule],
  exports: [MainHeaderComponent],
  providers: [],
})
export class MainHeaderModule {}
