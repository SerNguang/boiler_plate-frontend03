import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/modules/auth/resources/auth';


export const signupPage = createAction(
  '[Signup Component] Signup User',
  props<{ user: User }>()
);

export const signupSuccess = createAction(
  '[Auth Effect] Sginup User Success',
  props<{ user: User }>()
);

export const signupFailure = createAction(
  '[Auth Effect] Signup User Failure',
  props<{ error: any }>()
);

export const loginPage = createAction(
  '[Login Component] Login User',
  props<{ email: string; password: string }>()
);

export const loginModal = createAction(
  '[Login Modal Component] Login User',
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth Effect] Login User Success',
  props<{ user: User }>()
);

export const loginFailure = createAction(
  '[Auth Effect] Login User Failure',
  props<{ error: any }>()
);

export const logout = createAction('[Auth Links Component] Logout User');

export const browserReload = createAction(
  '[Core Component] Browser Reload',
  props<{ user: User }>()
);
