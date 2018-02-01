import axios from 'axios';
import { SET_SHOPS } from './types';

export function setShops(shops) {

  return {
    type: SET_SHOPS,
    shops
  }
}

export function fetchShops() {

  return dispatch => {
    axios.get('/api/shops').then(response => {
      return dispatch(setShops(response.data.shops));
    });
  }
}
