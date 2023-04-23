import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';

import { User } from './app/models/user.interface';
import { Group } from './app/models/group.interface';

export interface State {
  user: User | null;
  userGroups: Group[] | null;
  groups: Group[] | null;
  authToken: string | undefined;
  [key: string]: any;
}

const state: State = {
  user: null,
  userGroups: null,
  groups: null,
  authToken: undefined,
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
