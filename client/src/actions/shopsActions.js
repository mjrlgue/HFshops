
import { SET_SHOPS } from './types';

export function setShops(shops) {

  return {
    type: SET_SHOPS,
    shops
  }
}

export function fetchShops() {

  return dispatch => {
    fetch('/api/shops')
      .then(res => res.json())
      .then(data => dispatch(setShops(data.shops)));
  }
}
