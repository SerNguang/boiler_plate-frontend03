import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { PaginatedResult, User } from '../resources/user';


/****************************************************************** */
/*****LOAD PRODUCTS ** */
/****************************************************************** */
export const loadUsers = createAction(
  '[Users Component] Load Users',
  props<{ url: string }>()
);

export const loadAdminUsers = createAction(
  '[Users List Component] Load Users',
  props<{ url: string }>()
);

export const loadUsersSuccess = createAction(
  '[User Effect] Load Users Success',
  props<{ paginatedResult: PaginatedResult<User[]> }>()
);

export const loadUsersFailure = createAction(
  '[Users Component] Load Users Failure',
  props<{ error: any }>()
);

/****************************************************************** */
/*****LOAD INDIVIDUAL PRODUCT ** */
/****************************************************************** */

export const loadUser = createAction(
  '[User View Component] Load User',
  props<{ id: string }>()
);

export const loadAdminUser = createAction(
  '[User Item Component] Load User',
  props<{ id: string }>()
);

export const loadUserSuccess = createAction(
  '[User Effect] Load User Success',
  props<{ user: User }>()
);

export const loadUserFailure = createAction(
  '[User Effect] Load User Failure',
  props<{ error: any }>()
);

/****************************************************************** */
/*****ADD INDIVIDUAL PRODUCT ** */
/****************************************************************** */

export const addUser = createAction(
  '[User Add Component] Add User',
  props<{ user: User }>()
);

export const addUserSuccess = createAction(
  '[User Effect] Add User Success',
  props<{ user: User }>()
);

export const addUserFailure = createAction(
  '[User Effect] Add User Failure',
  props<{ error: any }>()
);

/****************************************************************** */
/*****UPDATE INDIVIDUAL PRODUCT ** */
/****************************************************************** */
export const upsertUser = createAction(
  '[User Edit Component] Upsert User',
  props<{ user: User }>()
);
export const upsertUserSuccess = createAction(
  '[User Effect] Upsert User Success',
  props<{ user: User }>()
);
export const upsertUserFailure = createAction(
  '[User Effect] Upsert User failure',
  props<{ error: any }>()
);

/****************************************************************** */
/*****DELETE INDIVIDUAL PRODUCT ** */
/****************************************************************** */

export const deleteItemUser = createAction(
  '[User Item Component] Delete User',
  props<{ userId: string }>()
);

export const deleteUser = createAction(
  '[User List Component] Delete User',
  props<{ userId: string }>()
);

export const deleteUserSuccess = createAction(
  '[User Effect] Delete User Success'
);
export const deleteUserFailure = createAction(
  '[User Effect] Delete User Failure',
  props<{ error: any }>()
);

export const clearUsers = createAction('[User/API] Clear Users');
