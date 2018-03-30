import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Routes } from './Routes.jsx';
import configureStore from './store/configureStore.js';
import About from './components/About/About.jsx';

import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
} from 'react-router-dom';

let store = configureStore({
    getCurrencies: { cur: [] }
});
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Routes />
        </Router>
    </Provider>,
    document.getElementById('tmp-page')
);

