import { SET_CURRENT_USER } from './types';

const API = process.env.REACT_APP_API_URL + 'auth/';

export const signUpUser = userData => dispatch => {
  fetch(API + 'signup', {
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify(userData)
  })
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
  fetch(API + 'login', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(userData)
  })
    .then(res => res.json())
    .then(data => {
      if (data.name && data.email) {
        localStorage.setItem('name', data.name);
        localStorage.setItem('email', data.email);
        dispatch(setCurrentUser(data));
      }
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const logoutUser = () => dispatch => {
  fetch(API + 'logout', {
    method: 'DELETE',
    credentials: 'include'
  })
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