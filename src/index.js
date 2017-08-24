import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as reducers from './store/reducers';
import AppContainer from './AppContainer';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  combineReducers(reducers),
  compose(applyMiddleware(thunkMiddleware)),
);

ReactDOM.render(
  <Provider store={store} >
    <AppContainer />
  </Provider>,

  document.getElementById('root'),
);
registerServiceWorker();
