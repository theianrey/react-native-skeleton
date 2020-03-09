/**
 * * Redux store configuration
 */

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './reducer';
// ! import devToolsEnhancer from 'remote-redux-devtools'; // * for anyone who uses saga, please add this package on the middleware

// * create the store
const configureStore = () => createStore(RootReducer, applyMiddleware(thunk));

export default configureStore;
