import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, filter, map, of, switchMap, take, zip } from 'rxjs';
import {
  LoadAllUsers,
  getAllGroups,
  getAllUsers,
} from 'src/app/dashboard/store';
import { Group } from 'src/app/models';
import { User } from 'src/app/models/user.interface';

@Component({
  selector: 'main-header',
  styleUrls: ['./main-header.component.scss'],
  template: `
    <div>
      <h1 class="logo" [routerLink]="['/']">MuSick!</h1>
      <div class="tools">
        <input
          #searchInput
          *ngIf="user"
          type="text"
          placeholder="Search..."
          [(ngModel)]="search"
          (input)="searchHandler()"
        />
        <ul *ngIf="showSearchResult && search.length > 0" class="search-result">
          <div *ngIf="searchResult.groups.length > 0">
            <span>Groups:</span>
            <li
              *ngFor="let result of searchResult.groups"
              [routerLink]="['/dashboard/groups/', result.id]"
              (click)="clearSearch()"
            >
              {{ result.name }}
            </li>
          </div>
          <div *ngIf="searchResult.users.length > 0">
            <span>Users:</span>
            <li
              *ngFor="let result of searchResult.users"
              [routerLink]="['/dashboard/users/', result.id]"
              (click)="clearSearch()"
            >
              {{ result.name }} {{ result.lastname }}
            </li>
          </div>
          <span
            *ngIf="
              searchResult.groups.length === 0 &&
              searchResult.users.length === 0
            "
            >No results found</span
          >
        </ul>
        <user-nav [user]="user"></user-nav>
      </div>
    </div>
  `,
})
export class MainHeaderComponent implements OnInit, AfterViewInit {
  @Input() user: User | null | undefined;

  @ViewChild('searchInput') input!: ElementRef;

  groups$!: Observable<Group[]>;
  users$!: Observable<User[]>;

  showSearchResult: boolean = false;
  searchResult: { groups: Group[]; users: User[] } = { groups: [], users: [] };

  search = '';

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.groups$ = this.store.select(getAllGroups);
    this.store.dispatch(LoadAllUsers());
    this.users$ = this.store.select(getAllUsers);
  }

  ngAfterViewInit(): void {
    // console.log(this.input);
    // this.input.nativeElement.onblur = () => {
    //   this.showSearchResult = false;
    // };
  }

  searchHandler(): void {
    this.searchFilter(this.search).subscribe((result) => {
      if (result) this.searchResult = result;
    });
    this.showSearchResult = true;
  }

  searchFilter(search: string): Observable<any> {
    if (search === '') return of({ groups: [], users: [] });
    return this.groups$.pipe(
      take(1),
      switchMap((groups) => zip(of(groups), this.users$.pipe(take(1)))),
      map(([groups, users]) => {
        const result = {
          groups: [] as Group[],
          users: [] as User[],
        };
        result.groups = [
          ...groups.filter((group) =>
            group.name.toLowerCase().includes(search.toLowerCase())
          ),
        ];
        result.users = users.filter((user: User) => {
          return user.name && user.lastname
            ? user.name.toLowerCase().includes(search.toLowerCase()) ||
                user.lastname.toLowerCase().includes(search.toLowerCase())
            : user.email.toLowerCase().includes(search.toLowerCase());
        });
        return result;
      })
    );
  }

  clearSearch(): void {
    this.search = '';
  }
}
