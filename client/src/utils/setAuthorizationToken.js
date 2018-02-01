import axios from 'axios';

export default function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `hiddenFounder ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}
