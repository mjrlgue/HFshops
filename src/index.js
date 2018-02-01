import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import history from './history';
import LoginPage from './components/login/LoginPage';
import setAuthorizationToken from './utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import { setCurrentUser } from './actions/authActions';

const store = createStore(
  rootReducer,
  compose (
    composeWithDevTools(
      applyMiddleware(thunk)
    )
  )
);

//save isAuthenticated in redux store
if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)))
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Router history={history}>
        <App>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/login" component={LoginPage} />
          </Switch>
  </App>
      </Router>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
