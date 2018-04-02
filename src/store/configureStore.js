import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import persistState from 'redux-localstorage';
import reduxCatch from 'redux-catch';
import { aboutReducer } from './about/about.reducer';
import { authReducer } from './auth/auth.reducer';
import { headerReducer } from './header/header.reducer';

export const allReducers = combineReducers({
    aboutReducer,
    authReducer,
    headerReducer
});

function errorHandler(error, getState, lastAction) {
    console.error(error);
    console.debug('current state', getState());
    console.debug('last action was', lastAction);
}

export default function configureStore(initialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        allReducers,
        initialState,
        composeEnhancers(
            applyMiddleware(thunk, logger, reduxCatch(errorHandler)),
            persistState()
        )
    );
    return store;
}
