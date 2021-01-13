import axios from 'axios';
import { SET_CURRENT_USER } from './types';

const API_URL = process.env.REACT_APP_API_URL;

export const signUpUser = userData => dispatch => {
  axios.post(API_URL + 'auth/signup', userData)
    .then(res => {
      // Set current user
      dispatch(setCurrentUser(res.data));
    })
    .catch(err =>
      console.log(err)
    );
};

export const loginUser = userData => dispatch => {
  axios.post(API_URL + 'auth/login', userData)
    .then(res => {
      if (res.status === 200) {
        localStorage.name = res.data.name;
        localStorage.email = res.data.email;
        dispatch(setCurrentUser(res.data));
        return true;
      }
    })
    .catch(err => {
      console.log(err);
      return false;
    });
};

export const logoutUser = () => dispatch => {
  // Set Current User to empty object which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
}

export const setCurrentUser = userObj => ({
  type: SET_CURRENT_USER,
  payload: userObj
})