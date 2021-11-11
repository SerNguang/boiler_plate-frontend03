import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as UserActions from './user.actions';
import { User, Pagination } from '../resources/user';

export const usersFeatureKey = 'users';

export interface State extends EntityState<User> {
  // additional entities state properties
  pagination: Pagination;
  error: any;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
  sortComparer: sortByName,
  //selectId: selectUserId
});

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  pagination: null,
  error: null,
});

export const reducer = createReducer(
  initialState,
  on(UserActions.loadUsersSuccess, (state, action) =>
    adapter.setAll(action.paginatedResult.result, {
      ...state,
      pagination: action.paginatedResult.pagination,
    })
  ),
  on(
    UserActions.loadUserSuccess,
    UserActions.addUserSuccess,
    (state, action) => adapter.addOne(action.user, state)
  ),
  on(UserActions.upsertUserSuccess, (state, action) =>
    adapter.upsertOne(action.user, state)
  ),
  on(
    UserActions.deleteUser,
    UserActions.deleteItemUser,
    (state, action) => adapter.removeOne(action.userId, state)
  ),
  on(UserActions.clearUsers, (state) => adapter.removeAll(state)),
  on(
    UserActions.upsertUserFailure,
    UserActions.loadUsersFailure,
    UserActions.addUserFailure,
    UserActions.loadUserFailure,
    UserActions.deleteUserFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error,
      };
    }
  )
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export function sortByName(a: User, b: User): number {
  return a.name.localeCompare(b.name);
}

// export function selectUserId(a: User): string {
//   //In this case this would be optional since primary key is id
//   return a.userid;
// }
