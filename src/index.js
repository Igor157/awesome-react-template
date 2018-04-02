import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes.component.jsx';
import ErrorBoundary from './error-boundary.component.jsx';
import configureStore from './store/configureStore.js';
import history from './history';

import {
    Router,
    Route,
    NavLink,
    Switch
} from 'react-router-dom';

let store = configureStore({});
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <ErrorBoundary>
                <Routes />
            </ErrorBoundary>
        </Router>
    </Provider>,
    document.getElementById('tmp-page')
);

