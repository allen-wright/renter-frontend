import axios from 'axios';
import { GET_MAINTENANCE_REQUESTS, MAINTENANCE_REQUESTS_LOADING } from '../actions/types';

const instance = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_URL,
})

export const getMaintenanceRequests = () => dispatch => {
  dispatch(setMaintenanceRequestsLoading());
  instance.get('maintenancerequests')
    .then(res => dispatch({ type: GET_MAINTENANCE_REQUESTS, payload: res.data }))
    .catch(err => dispatch({ type: GET_MAINTENANCE_REQUESTS, payload: {} }));
}

export const setMaintenanceRequestsLoading = () => {
  return {
    type: MAINTENANCE_REQUESTS_LOADING
  }
}