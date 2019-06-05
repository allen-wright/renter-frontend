import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { SET_CURRENT_USER } from './types';
import setAuthHeader from '../utils/setAuthHeader';

export const signUpUser = userData => dispatch => {
  axios.post('http://localhost:4000/api/v1/auth/signup', userData)
    .then(res => {
      // Save to localStorage
      const { token } = res.data;
      // Set token
      localStorage.setItem('jwtToken', token);
      // Set token to Auth Header
      setAuthHeader(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      console.log(err)
    );
};

export const loginUser = userData => dispatch => {
  axios.post('http://localhost:4000/api/v1/auth/login', userData)
    .then(res => {
      // Save to localStorage
      const { token } = res.data;
      // Set token
      localStorage.setItem('jwtToken', token);
      // Set token to Auth Header
      setAuthHeader(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      console.log(err)
    );
};

export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthHeader(false);
  // Set Current User to empty object which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
}

// function handleErrors(response) {
//   if (!response.ok) {
//     throw Error(response.statusText);
//   }
//   return response;
// }

export const setCurrentUser = userObj => ({
  type: SET_CURRENT_USER,
  payload: userObj
})