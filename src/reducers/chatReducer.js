import { GET_CHATS , CHATS_LOADING } from '../actions/types';

const initialState = {
  userChats: null,
  loading: false
}

const chatReducer = (state = initialState, action) => {
  switch(action.type) {
    case CHATS_LOADING:
      return { ...state, loading: true };
    case GET_CHATS:
      return { ...state, userChats: action.payload, loading: false };
    default:
      return state;
  }
}

export default chatReducer;