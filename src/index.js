import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as reducers from './store/reducers';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  combineReducers(reducers),
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),// eslint-disable-line
  ),
);

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,

  document.getElementById('root'),
);
registerServiceWorker();
