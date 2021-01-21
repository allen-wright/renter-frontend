import { GET_LEASE_TERMS, LEASE_TERMS_LOADING } from './types';

const API = process.env.REACT_APP_API_URL + 'leaseterms/';

export const getLeaseTerms = () => dispatch => {
  dispatch(setLeaseTermsLoading());
  fetch(API, {
    credentials: 'include'
  })
    .then(res => res.json())
    .then(data => dispatch({ type: GET_LEASE_TERMS, payload: data }))
    .catch(err => dispatch({ type: GET_LEASE_TERMS, payload: {} }));
}

export const setLeaseTermsLoading = () => {
  return {
    type: LEASE_TERMS_LOADING
  }
}