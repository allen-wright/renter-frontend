import axios from 'axios';
import { SET_CURRENT_USER, GET_PROFILE, PROFILE_LOADING } from '../actions/types';

const API_URL = process.env.API_URL + 'users/';

export const getProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios.get(API_URL)
    .then(res => dispatch({ type: GET_PROFILE, payload: res.data }))
    .catch(err => dispatch({ type: GET_PROFILE, payload: {} }));
}

export const deleteUser = () => dispatch => {
  if (window.confirm('Are you sure you want to delete your account? This cannot be undone!')) {
    axios.delete(API_URL + 'users/')
    .then(res => dispatch({ type: SET_CURRENT_USER, payload: {} }))
    .catch(err => {});
  }
}

export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  }
}