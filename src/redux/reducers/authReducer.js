import { SET_CURRENT_USER } from '../actions/types';

const initialState = {
  currentUser: {}
}

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_CURRENT_USER:
      return {...state, currentUser: action.payload};
    default:
      return state;
  }
}

export default authReducer;