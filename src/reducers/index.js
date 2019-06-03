import { combineReducers } from 'redux';
import user from './userReducer';

// Combine all our reducers together
const rootReducer = combineReducers({
  user
})

export default rootReducer;