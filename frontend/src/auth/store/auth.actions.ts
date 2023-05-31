import { createAction, props } from '@ngrx/store';

import { User } from 'src/app/models/user.interface';

export const LOG_IN = '[Auth] Log in';
export const LOG_IN_SUCCESS = '[Auth] Log in success';
export const LOG_IN_FAIL = '[Auth] Log in fail';
export const REGISTER = '[Auth] Register';
export const REGISTER_SUCCESS = '[Auth] Register success';
export const REGISTER_FAIL = '[Auth] Register fail';
export const SET_AUTH_TOKEN = '[Auth] Set auth token';
export const LOG_OUT = '[Auth] Log out';
export const LOG_OUT_SUCCESS = '[Auth] Log out success';
export const LOG_OUT_FAIL = '[Auth] Log out fail';

export const Login = createAction(
  LOG_IN,
  props<{ email: string; password: string }>()
);
export const LoginSuccess = createAction(
  LOG_IN_SUCCESS,
  props<{ user: User }>()
);
export const LoginFail = createAction(LOG_IN_FAIL, props<{ error: any }>());
export const SetAuthToken = createAction(
  SET_AUTH_TOKEN,
  props<{ token: string }>()
);
export const Register = createAction(
  REGISTER,
  props<{ email: string; password: string }>()
);
export const RegisterSuccess = createAction(
  REGISTER_SUCCESS,
  props<{ user: User }>()
);
export const RegisterFail = createAction(
  REGISTER_FAIL,
  props<{ error: any }>()
);

export const LogOut = createAction(LOG_OUT);
export const LogOutSuccess = createAction(LOG_OUT_SUCCESS);
export const LogOutFail = createAction(LOG_OUT_FAIL, props<{ error: any }>);
