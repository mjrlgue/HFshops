import { combineReducers } from 'redux';
import shops from './reducers/shops';
import flashMessages  from './reducers/flashMessages';

import auth from './reducers/auth';

export default combineReducers({
  flashMessages,
  shops,
  auth
});
