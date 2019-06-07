import axios from 'axios';
import { GET_LEASE_TERMS, LEASE_TERMS_LOADING } from '../actions/types';

const API_URL = 'http://localhost:4000/api/v1/';

export const getLeaseTerms = () => dispatch => {
  dispatch(setLeaseTermsLoading());
  axios.get(API_URL + 'leaseterms/')
    .then(res => dispatch({ type: GET_LEASE_TERMS, payload: res.data }))
    .catch(err => dispatch({ type: GET_LEASE_TERMS, payload: {} }));
}

export const setLeaseTermsLoading = () => {
  return {
    type: LEASE_TERMS_LOADING
  }
}