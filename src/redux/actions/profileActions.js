import { SET_CURRENT_USER, GET_PROFILE, PROFILE_LOADING } from './types';

const API = process.env.REACT_APP_API_URL + 'users/';

export const getProfile = () => dispatch => {
  dispatch(setProfileLoading());
    fetch(API, {
      credentials: 'include'
    })
    .then(res => res.json())
    .then(data => dispatch({ type: GET_PROFILE, payload: data }))
    .catch(err => dispatch({ type: GET_PROFILE, payload: {} }));
}

export const deleteUser = () => dispatch => {
  if (window.confirm('Are you sure you want to delete your account? This cannot be undone!')) {
    fetch(API, {
      method: 'DELETE',
      credentials: 'include'
    })
    .then(res => res.json())
    .then(data => dispatch({ type: SET_CURRENT_USER, payload: {} }))
    .catch(err => {});
  }
}

export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  }
}