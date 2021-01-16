import axios from 'axios';
import { GET_CHATS, CHATS_LOADING, POST_MESSAGE } from '../actions/types';

const instance = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_URL + 'chats/',
})

export const getChats = () => dispatch => {
  dispatch(setChatsLoading());
  instance.get('all')
    .then(res => dispatch({ type: GET_CHATS, payload: res.data }))
    .catch(err => dispatch({ type: GET_CHATS, payload: {} }));
}

export const postMessage = (postId, message) => dispatch => {
  dispatch(setChatsLoading());
  instance.post(postId + '/messages',
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