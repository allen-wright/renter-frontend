import { GET_PROFILE, PROFILE_LOADING } from '../actions/types';

const initialState = {
  userProfile: {},
  loading: false,
}

const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case PROFILE_LOADING:
      return { ...state, loading: true };
    case GET_PROFILE:
      return { ...state, userProfile: action.payload, loading: false };
    default:
      return state;
  }
}

export default profileReducer;