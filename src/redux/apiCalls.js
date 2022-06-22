import { publicRequest } from '../requestMethods';
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutUser,
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
