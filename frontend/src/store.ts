import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';

import { User } from './app/models/user.interface';
import { Group } from './app/models/group.interface';

export interface State {
  user: User | null;
  groups: Group[] | null;
  [key: string]: any;
}

const state: State = {
  user: null,
  groups: null,
};

export class Store {
  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable().pipe(distinctUntilChanged());

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.store.pipe(map((data) => data?.[name]));
  }

  set(name: string, state: any) {
    this.subject.next({ ...this.value, [name]: state });
  }
}
