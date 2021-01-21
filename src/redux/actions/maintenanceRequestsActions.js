import { GET_MAINTENANCE_REQUESTS, MAINTENANCE_REQUESTS_LOADING } from './types';

const API = process.env.REACT_APP_API_URL + 'maintenancerequests/';

export const getMaintenanceRequests = () => dispatch => {
  dispatch(setMaintenanceRequestsLoading());
  fetch(API, {
    credentials: 'include'
  })
    .then(res => res.json())
    .then(data => dispatch({ type: GET_MAINTENANCE_REQUESTS, payload: data }))
    .catch(err => dispatch({ type: GET_MAINTENANCE_REQUESTS, payload: {} }));
}

export const setMaintenanceRequestsLoading = () => {
  return {
    type: MAINTENANCE_REQUESTS_LOADING
  }
}