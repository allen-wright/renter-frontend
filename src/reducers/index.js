import { combineReducers } from 'redux';
import auth from './authReducer';

// Combine all our reducers together
const rootReducer = combineReducers({
  auth
})

export default rootReducer;