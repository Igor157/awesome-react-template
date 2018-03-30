import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import persistState from 'redux-localstorage';
import {aboutReducer} from './About/about.reducer';
import {authReducer} from './Auth/auth.reducer';

export const allReducers = combineReducers({
    aboutReducer,
    authReducer
});

export default function configureStore(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    allReducers,
    initialState,
    composeEnhancers(
    applyMiddleware(thunk, logger),
    persistState()
  )
);
  return store;
}
