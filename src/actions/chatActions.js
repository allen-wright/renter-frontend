import axios from 'axios';
import { GET_CHATS, CHATS_LOADING } from '../actions/types';

const API_URL = 'http://localhost:4000/api/v1/chats/all';

export const getChats = () => dispatch => {
  dispatch(setChatsLoading());
  axios.get(API_URL)
    .then(res => dispatch({ type: GET_CHATS, payload: res.data }))
    .catch(err => dispatch({ type: GET_CHATS, payload: {} }));
}

export const setChatsLoading = () => {
  return {
    type: CHATS_LOADING
  }
}