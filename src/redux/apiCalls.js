import { publicRequest } from '../requestMethods';
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutUser,
  registerStart,
  registerSuccess,
  registerFailure,
} from './userRedux';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const response = await publicRequest.post('/auth/login', user);
    dispatch(loginSuccess(response.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logout = async (dispatch) => {
  dispatch(logoutUser());
};

export const registerNewUser = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const response = await publicRequest.post('/auth/register', user);
    dispatch(registerSuccess(response.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};
