import { GET_MAINTENANCE_REQUESTS, MAINTENANCE_REQUESTS_LOADING } from '../actions/types';

const initialState = {
  userMaintenanceRequests: null,
  loading: false,
}

const maintenanceRequestsReducer = (state = initialState, action) => {
  switch(action.type) {
    case MAINTENANCE_REQUESTS_LOADING:
      return { ...state, loading: true };
    case GET_MAINTENANCE_REQUESTS:
      return { ...state, userMaintenanceRequests: action.payload, loading: false };
    default:
      return state;
  }
}

export default maintenanceRequestsReducer;