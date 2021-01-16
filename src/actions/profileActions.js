import axios from 'axios';
import { SET_CURRENT_USER, GET_PROFILE, PROFILE_LOADING } from '../actions/types';

const instance = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_URL,
})

export const getProfile = () => dispatch => {
  dispatch(setProfileLoading());
  instance.get('users')
    .then(res => dispatch({ type: GET_PROFILE, payload: res.data }))
    .catch(err => dispatch({ type: GET_PROFILE, payload: {} }));
}

export const deleteUser = () => dispatch => {
  if (window.confirm('Are you sure you want to delete your account? This cannot be undone!')) {
    instance.delete('users')
    .then(res => dispatch({ type: SET_CURRENT_USER, payload: {} }))
    .catch(err => {});
  }
}

export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  }
}