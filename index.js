import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRoutes } from './Routes.jsx';
import configureStore from './store/configureStore.js';
import About from './components/About/About.jsx';

import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
} from 'react-router-dom';

let store = configureStore({
    headerReducer: { startAuth: false }
});
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <ConnectedRoutes />
        </Router>
    </Provider>,
    document.getElementById('tmp-page')
);

