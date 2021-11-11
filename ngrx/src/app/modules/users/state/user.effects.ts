import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../resources/user.service';
import * as UserActions from './user.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
  /****************************************************************** */
  /*****LOAD PRODUCTS API EFFECT ** */
  /****************************************************************** */
  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.loadUsers, UserActions.loadAdminUsers),
      mergeMap((action) =>
        this.userService.getUsers(action.url).pipe(
          map((data) =>
            UserActions.loadUsersSuccess({ paginatedResult: data })
          ),
          catchError((error) =>
            of(UserActions.loadUsersFailure({ error }))
          )
        )
      )
    );
  });

  /****************************************************************** */
  /*****LOAD PRODUCT API EFFECT ** */
  /****************************************************************** */

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUser, UserActions.loadAdminUser),
      mergeMap((action) =>
        this.userService.getUser(action.id).pipe(
          map((user) =>
            UserActions.loadUserSuccess({ user: user })
          ),
          catchError((error) =>
            of(UserActions.loadUserFailure({ error: error }))
          )
        )
      )
    )
  );

  /****************************************************************** */
  /*****CREATE PRODUCT API EFFECT ** */
  /****************************************************************** */
  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.addUser),
      mergeMap((action) =>
        this.userService.createUser(action.user).pipe(
          map((user) =>
            UserActions.addUserSuccess({ user: user })
          ),
          catchError((error) =>
            of(UserActions.addUserFailure({ error: error }))
          )
        )
      )
    )
  );

  /****************************************************************** */
  /*****UPDATE PRODUCT API EFFECT ** */
  /****************************************************************** */
  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.upsertUser),
      mergeMap((action) =>
        this.userService.editUser(action.user).pipe(
          map((user) => UserActions.upsertUserSuccess({ user })),
          catchError((error) =>
            of(UserActions.upsertUserFailure({ error }))
          )
        )
      )
    )
  );

  /****************************************************************** */
  /*****DELETE PRODUCT API EFFECT ** */
  /****************************************************************** */
  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.deleteUser, UserActions.deleteItemUser),
      mergeMap((action) =>
        this.userService.deleteUser(action.userId).pipe(
          map(() => UserActions.deleteUserSuccess()),
          catchError((error) =>
            of(UserActions.deleteUserFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}
