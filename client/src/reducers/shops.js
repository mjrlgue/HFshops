import { SET_SHOPS } from '../actions/types';

export default function shops(state = [], action = {}) {
  switch(action.type) {
    case SET_SHOPS:
      return action.shops;
  default: return state;
  }
}
