import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware, push } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { reducer as formReducer } from 'redux-form';
import Root from './components/root';
import mainReducer from './reducer';
import ergReducer from './components/ergPage/reducer';
import './reset.css';

const loggerMiddleware = createLogger();

const rootReducer = combineReducers({
  form: formReducer,
  main: mainReducer,
  erg: ergReducer,
});

const history = createBrowserHistory();

const store = createStore(
  connectRouter(history)(rootReducer),
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
    routerMiddleware(history),
  )
);

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('app')
);

module.hot.accept();
