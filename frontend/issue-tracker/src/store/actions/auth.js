import axios from 'axios';
import * as actionTypt from './actionTypes';

export const authStart = () => {
  return {
    type: actionTypt.AUTH_START
  }
}

export const authSuccess = (token) => {
  return {
    type: actionTypt.AUTH_SUCCESS,
    token: token
  }
}

export const authFail = (error) => {
  return {
    type: actionTypt.AUTH_LOGOUT,
    error: error
  }
}

export const authSignup = (userName, email, password1, password2) => {
  return dispatch => {
    dispatch(authStart());
    axios.post('http://127.0.0.1/auth/signup/', {
      userName: userName,
      email: email,
      password1: password1,
      password2: password2
    })
    .then(res => {
      const token = res.data.key;
      const expirationDate = new Date(new Date().getTime + 3600*1000);
      localStorage.setItem('token',token);
      localStorage.setItem('expirationDate',expirationDate);
      dispatch(authSuccess(token));
      dispatch(checkAuthTimeout(3600));
    })
    .catch(err => {
      dispatch(authFail(err));
    })
  }
}

export const authLogin = (userName, password) => {
  return dispatch => {
    dispatch(authStart());
    axios.post('http://127.0.0.1/auth/login/', {
      userName: userName,
      password: password
    })
    .then(res => {
      const token = res.data.key;
      const expirationDate = new Date(new Date().getTime + 3600*1000);
      localStorage.setItem('token',token);
      localStorage.setItem('expirationDate',expirationDate);
      dispatch(authSuccess(token));
      dispatch(checkAuthTimeout(3600));
    })
    .catch(err => {
      dispatch(authFail(err));
    })
  }
}

export const checkAuthTimeout = (expirationTime) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  }
}

export const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('expirationDate');
  return {
    type: actionTypt.AUTH_LOGOUT
  }
}