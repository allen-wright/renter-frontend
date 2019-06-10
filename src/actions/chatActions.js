import axios from 'axios';
import { GET_CHATS, CHATS_LOADING, POST_MESSAGE } from '../actions/types';

const API_URL = 'http://localhost:4000/api/v1/chats/';

export const getChats = () => dispatch => {
  dispatch(setChatsLoading());
  axios.get(API_URL + 'all')
    .then(res => dispatch({ type: GET_CHATS, payload: res.data }))
    .catch(err => dispatch({ type: GET_CHATS, payload: {} }));
}

export const postMessage = (postId, message) => dispatch => {
  dispatch(setChatsLoading());
  axios.post(API_URL + postId + '/messages',
    message
  )
  .then(res => dispatch({ type: POST_MESSAGE, payload: res.data }))
  .catch(err => dispatch({ type: POST_MESSAGE, payload: {} }))
}

export const setChatsLoading = () => {
  return {
    type: CHATS_LOADING
  }
}