/**
 * * Redux store configuration
 */

import {createStore} from 'redux';
import RootReducer from './reducer';
// ! import devToolsEnhancer from 'remote-redux-devtools'; // * for anyone who uses saga, please add this package on the middleware

// * create the store
const configureStore = () =>
  createStore(
    RootReducer,
    // * change this part and add your middleware for redux-saga users
    window.__REDUX__DEVTOOLS_EXTENTION__ &&
      window.__REDUX__DEVTOOLS_EXTENTION__(),
  );

export default configureStore;
