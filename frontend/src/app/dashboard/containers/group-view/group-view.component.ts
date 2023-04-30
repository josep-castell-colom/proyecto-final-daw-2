import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Group } from 'src/app/models/group.interface';

import { Observable } from 'rxjs/internal/Observable';

import * as dashboardStore from '../../store';

@Component({
  selector: 'group-view',
  styleUrls: ['group-view.component.scss'],
  template: `<div>
    <group-detail [group]="group$ | async"></group-detail>
  </div>`,
})
export class GroupViewComponent implements OnInit {
  group$: Observable<Group>;
  id: number;

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.id = parseInt(id);
      }
    });

    this.store.dispatch(dashboardStore.LoadGroup({ id: this.id }));
    this.group$ = this.store.select(dashboardStore.getSelectedGroup);
  }
}
