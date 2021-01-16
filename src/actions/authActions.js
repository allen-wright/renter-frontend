import axios from 'axios';
import { SET_CURRENT_USER } from './types';

const instance = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_URL + 'auth/',
})

export const signUpUser = userData => dispatch => {
  instance.post('signup', userData)
    .then(res => {
      // Set current user
      localStorage.setItem('name', res.data.name);
      localStorage.setItem('email', res.data.email);
      dispatch(setCurrentUser(res.data));
    })
    .catch(err =>
      console.log(err)
    );
};

export const loginUser = userData => dispatch => {
  instance.post('login', userData)
    .then(res => {
      if (res.status === 200) {
        localStorage.setItem('name', res.data.name);
        localStorage.setItem('email', res.data.email);
        dispatch(setCurrentUser(res.data));
      }
    })
    .catch(err => {
      console.log(err);
    });
};

export const logoutUser = () => dispatch => {
  instance.delete('logout')
    .then(res => {
      if (res.status === 200) {
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        dispatch(setCurrentUser({}));
      }
    })
    .catch(err => {
      console.log(err);
    })
}

export const setCurrentUser = userObj => ({
  type: SET_CURRENT_USER,
  payload: userObj
})