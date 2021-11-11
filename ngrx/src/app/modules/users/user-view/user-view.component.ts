import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../resources/user';
import * as fromUserSelectors from '../state/user.selectors';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import * as fromUserActions from '../state/user.actions';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss'],
})
export class UserViewComponent implements OnInit {
  userId: string;
  isUserInStore$: Observable<boolean>;
  user$: Observable<User>;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');

    this.isUserInStore$ = this.store.pipe(
      select(fromUserSelectors.entityExists, { id: this.userId })
    );

    this.user$ = this.isUserInStore$.pipe(
      mergeMap((isUserInStore) => {
        if (!isUserInStore) {
          this.store.dispatch(
            fromUserActions.loadUser({ id: this.userId })
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
}
