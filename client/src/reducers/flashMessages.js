import { ADD_FLASH_MESSAGE } from '../actions/types';
import shortid from 'shortid';

export default (state = [], action = {}) => {
  switch(action.type){
    case ADD_FLASH_MESSAGE:
      return [
        ...state,
        {
          id: shortid.generate(), //id for each FLASH_MESSAGE to delete it after
          type: action.message.type,
          text: action.message.text
        }
      ];
    default: return state;
  }
}
