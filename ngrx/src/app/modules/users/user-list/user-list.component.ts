import { Component, OnInit } from '@angular/core';
import { PaginationService } from 'src/app/shared/services/pagination.service';
import { environment } from 'src/environments/environment';
import * as fromUserActions from '../state/user.actions';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store';
import * as UserSelector from '../state/user.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  constructor(
    private paginationService: PaginationService,
    private store: Store<AppState>
  ) {}

  currentUrl: string;
  vm$: Observable<UserSelector.UsersViewModel>;

  ngOnInit(): void {
    this.vm$ = this.store.pipe(select(UserSelector.selectUsersViewModel));
    this.loadUsers(
      this.paginationService.createUrl(
        '1',
        '25',
        environment.baseUrl + 'users?'
      )
    );
  }

  loadUsers(url: string) {
    this.store.dispatch(
      fromUserActions.loadAdminUsers({
        url: url,
      })
    );
    this.currentUrl = url;
  }

  deleteUser(id: string) {
    this.store.dispatch(fromUserActions.deleteUser({ userId: id }));
  }

  onPaginationChange(url: string) {
    this.loadUsers(url);
  }
}
