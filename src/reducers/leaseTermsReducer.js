import { GET_LEASE_TERMS, LEASE_TERMS_LOADING } from '../actions/types';

const initialState = {
  userLeaseTerms: null,
  loading: false
}

const leaseTermsReducer = (state = initialState, action) => {
  switch(action.type) {
    case LEASE_TERMS_LOADING:
      return { ...state, loading: true };
    case GET_LEASE_TERMS:
      return { ...state, userLeaseTerms: action.payload, loading: false };
    default:
      return state;
  }
}

export default leaseTermsReducer;