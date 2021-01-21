import { GET_CHATS, CHATS_LOADING, POST_MESSAGE } from './types';

const API = process.env.REACT_APP_API_URL + 'chats/';

export const getChats = () => dispatch => {
  dispatch(setChatsLoading());
  fetch(API + 'all', { credentials: 'include' })
    .then(res => res.json())
    .then(data => dispatch({ type: GET_CHATS, payload: data }))
    .catch(err => dispatch({ type: GET_CHATS, payload: {} }));
}

export const postMessage = (postId, message) => dispatch => {
  dispatch(setChatsLoading());
  fetch(API + 'messages', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(message)
  })
  .then(res => res.json())
  .then(data => dispatch({ type: POST_MESSAGE, payload: data }))
  .catch(err => dispatch({ type: POST_MESSAGE, payload: {} }))
}

export const setChatsLoading = () => {
  return {
    type: CHATS_LOADING
  }
}