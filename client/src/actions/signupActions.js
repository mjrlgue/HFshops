import axios from 'axios';

export function userSignupRequest(userData) {
  return dispatch => {
    return axios.post('/api/add/users', userData);
  }
}

export function isUserExists(identifier) {
  return dispatch => {
  return axios.get(`/api/add/users/${identifier}`);
  }
}
