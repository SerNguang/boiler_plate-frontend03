import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, mergeMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as AuthActions from '../actions/auth.actions';
import { AuthService } from 'src/app/modules/auth/resources/auth.service';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loginPage, AuthActions.loginModal),
      concatMap((action) =>
        this.authService.login(action.email, action.password).pipe(
          map((user) => AuthActions.loginSuccess({ user: user })),
          catchError((error) => of(AuthActions.loginFailure({ error })))
        )
      )
    );
  });

  // signup$ = createEffect(() => 
  //   this.actions$.pipe(
  //     ofType(AuthActions.signupPage),
  //     mergeMap((action) =>
  //       this.authService.signup(action.user).pipe(
  //         map((user) => AuthActions.signupSuccess({ user: user })),
  //         catchError((error) => of(AuthActions.signupFailure({ error })))
  //       )
  //     )
  //   );
  // );  

  signup$ = createEffect(() =>
  this.actions$.pipe(
    ofType(AuthActions.signupPage),
    concatMap((action) =>
      // this.authService.signup(action.user).pipe(
        this.authService.signup(action.user).pipe(        
        map((user) =>
          AuthActions.signupSuccess({ user: user })
        ),
        catchError((error) =>
          of(AuthActions.signupFailure({ error: error.message }))
        )
      )
    )
  )
);




  constructor(private actions$: Actions, private authService: AuthService) {}
}
