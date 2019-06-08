import axios from 'axios';
import { GET_MAINTENANCE_REQUESTS, MAINTENANCE_REQUESTS_LOADING } from '../actions/types';

const API_URL = 'http://localhost:4000/api/v1/maintenancerequests/';

export const getMaintenanceRequests = () => dispatch => {
  dispatch(setMaintenanceRequestsLoading());
  axios.get(API_URL)
    .then(res => dispatch({ type: GET_MAINTENANCE_REQUESTS, payload: res.data }))
    .catch(err => dispatch({ type: GET_MAINTENANCE_REQUESTS, payload: {} }));
}

export const setMaintenanceRequestsLoading = () => {
  return {
    type: MAINTENANCE_REQUESTS_LOADING
  }
}