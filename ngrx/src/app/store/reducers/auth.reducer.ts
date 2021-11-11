import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';
import { User } from 'src/app/modules/auth/resources/auth';

export const authFeatureKey = 'auth';

export interface State {
  user: User;
  error: any;
}

export const initialState: State = {
  user: {
    id: null,
    email: null,
    name: null,
    password: null,
    isAdmin: null,
  },
  error: null,
};

export const reducer = createReducer(
  initialState,

  on(AuthActions.signupSuccess, AuthActions.browserReload, (state, action) => {
    return {
      ...state,
      user: action.user,
      error: null,
    };
  }),
  on(AuthActions.signupFailure, (state, action) => {
    return {
      ...state,
      user: {
        id: null,
        email: null,
        name: null,
        password: null,
        isAdmin: null,
      },
      error: action.error,
    };
  }),

  on(AuthActions.loginSuccess, AuthActions.browserReload, (state, action) => {
    return {
      ...state,
      user: action.user,
      error: null,
    };
  }),
  on(AuthActions.loginFailure, (state, action) => {
    return {
      ...state,
      user: {
        id: null,
        email: null,
        name: null,
        password: null,
        isAdmin: null,
      },
      error: action.error,
    };
  }),
  on(AuthActions.logout, (state, action) => {
    return {
      ...state,
      user: {
        id: null,
        email: null,
        name: null,
        password: null,
        isAdmin: null,
      },
      error: null,
    };
  })
);
