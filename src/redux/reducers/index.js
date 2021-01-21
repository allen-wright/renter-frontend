import { combineReducers } from 'redux';
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import leaseTermsReducer from './leaseTermsReducer';
import maintenanceRequestsReducer from './maintenanceRequestsReducer';
import chatReducer from './chatReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  leaseTerms: leaseTermsReducer,
  maintenanceRequests: maintenanceRequestsReducer,
  chats: chatReducer
})

export default rootReducer;