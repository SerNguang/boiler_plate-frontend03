import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as UserReducer from './user.reducer';
import * as UserModel from '../resources/user';

export const selectUsersState = createFeatureSelector<UserReducer.State>(
  UserReducer.usersFeatureKey
);

export const selectAllUsers = createSelector(
  selectUsersState,
  UserReducer.selectAll
);

export const selectAllEntities = createSelector(
  selectUsersState,
  UserReducer.selectEntities
);

export const selectPagination = createSelector(
  selectUsersState,
  (state: UserReducer.State) => state.pagination
);

/********************************************************************************* */
/****RETURN PRODUCTS VIEW MODEL */
/********************************************************************************* */

export interface UsersViewModel {
  pagination: UserModel.Pagination;
  users: UserModel.User[];
}

export const selectUsersViewModel = createSelector(
  selectPagination,
  selectAllUsers,
  (
    pagination: UserModel.Pagination,
    users: UserModel.User[]
  ): UsersViewModel => {
    return {
      pagination: pagination,
      users: users,
    };
  }
);

export const entityExists = createSelector(
  selectAllEntities,
  (entities, props): boolean => {
    return entities[props.id] == undefined ? false : true;
  }
);

export const selectEntityById = createSelector(
  selectAllEntities,
  (entities, props) => entities[props.id]
);
