import { combineReducers } from 'redux';
import shops from './reducers/shops';
import flashMessages  from './reducers/flashMessages';

export default combineReducers({
  flashMessages,
  shops
});
