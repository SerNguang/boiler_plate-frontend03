import { Component, OnInit } from '@angular/core';
import * as fromUserModels from '../users/resources/user';
import { environment } from 'src/environments/environment';
import { PaginationService } from 'src/app/shared/services/pagination.service';
import * as fromUserActions from './state/user.actions';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store';
import * as UserSelector from './state/user.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  vm$: Observable<UserSelector.UsersViewModel>;

  constructor(
    private paginationService: PaginationService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.vm$ = this.store.pipe(select(UserSelector.selectUsersViewModel));
    this.loadUsers(
      this.paginationService.createUrl(
        '1',
        '9',
        environment.baseUrl + 'users?'
      )
    );
  }

  loadUsers(url: string) {
    this.store.dispatch(
      fromUserActions.loadUsers({
        url: url,
      })
    );
  }

  onUserFilterChange(item: fromUserModels.UserFilter) {
    this.loadUsers(
      this.paginationService.createUrl(
        '1',
        '25',
        environment.baseUrl + 'users?'
      )
    );
  }

  onPaginationChange(url: string) {
    this.loadUsers(url);
  }
}
