import { createAction, props } from '@ngrx/store';

export const login = createAction('[Auth] Login');

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{
    user: {
      uid: string;
      displayName: string | null;
      email: string | null;
      photoURL: string | null;
    };
  }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: any }>()
);

export const logout = createAction('[Auth] Logout');

export const logoutSuccess = createAction('[Auth] Logout Success');

export const logoutFailure = createAction(
  '[Auth] Logout Failure',
  props<{ error: any }>()
);
