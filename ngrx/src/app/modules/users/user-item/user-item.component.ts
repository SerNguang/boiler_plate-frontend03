import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../resources/user';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import * as fromUserSelectors from '../state/user.selectors';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store';
import * as fromUserActions from '../state/user.actions';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
})
export class UserItemComponent implements OnInit {
  user$: Observable<User>;
  isUserInStore$: Observable<boolean>;
  userId: string;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');

    this.isUserInStore$ = this.store.pipe(
      select(fromUserSelectors.entityExists, { id: this.userId })
    );

    this.user$ = this.isUserInStore$.pipe(
      mergeMap((isUserInStore) => {
        if (!isUserInStore) {
          this.store.dispatch(
            fromUserActions.loadAdminUser({ id: this.userId })
          );
        }

        return this.store.pipe(
          select(fromUserSelectors.selectEntityById, {
            id: this.userId,
          })
        );
      })
    );
  }

  deleteUser(id: string) {
    this.store.dispatch(
      fromUserActions.deleteItemUser({ userId: id })
    );
  }
}
