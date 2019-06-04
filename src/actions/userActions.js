import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { LOGIN_USER } from './types';

export const userLoginFetch = userData => dispatch => {
  console.log('try');
  axios.post('http://localhost:4000/api/v1/auth/login', userData)
    .then(res => {
      // Save to localStorage
      const { token } = res.data;
      // Set token
      localStorage.setItem('jwtToken', token);
      // Set token to Auth Header
      // setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(loginUser(decoded));
    })
    .catch(err =>
      console.log(err)
    );
};

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

const loginUser = userObj => ({
  type: LOGIN_USER,
  payload: userObj
})