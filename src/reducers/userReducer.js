import { LOGIN_USER } from '../actions/types';

const initialState = {
  currentUser: {},
  isLoggedIn: false,
  isFetching: true
}

const user = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_USER:
      return {...state, currentUser: action.payload, isLoggedIn: true, isFetching: false};
    default:
      return state;
  }
}

export default user;