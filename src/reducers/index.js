import { combineReducers } from 'redux';
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import leaseTermsReducer from './leaseTermsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  leaseTerms: leaseTermsReducer
})

export default rootReducer;