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
import { BrowserRouter as Router } from 'react-router-dom';
import history from './history';

const store = createStore(
  rootReducer,
  compose (
    composeWithDevTools(
      applyMiddleware(thunk)
    )
  )
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
