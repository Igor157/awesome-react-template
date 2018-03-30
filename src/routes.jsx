import React from 'react';
import ReactDOM from 'react-dom';
// import './default.scss';
// import styles from './ik-currency-page.style.scss';
import {
    Route,
    NavLink,
    Switch
} from 'react-router-dom';

import About from './components/About/About.jsx';
import Auth from './components/Auth/Auth.jsx';
import Home from './components/Home/Home.jsx';
import Navigation from './components/Navigation/Navigation.jsx';


class Routes extends React.Component {
    render() {
        return (
            <Route
                path='/'
                render={() =>
                    <div className="tmp-page">
                        <Switch>
                            <Route
                                exact path='/'
                                render={() => <Navigation />}
                            />
                            <Route
                                path='/about'
                                render={() => <Navigation />}
                            />
                            <Route
                                path='/home'
                                render={() => <Navigation />}
                            />
                        </Switch>
                        <Switch>
                            <Route
                                exact path='/about'
                                render={() => <About />}
                            />
                        </Switch>
                        <Switch>
                            <Route
                                path='/home'
                                render={() => <Home />}
                            />
                        </Switch>
                        <Switch>
                            <Route
                                path='/auth'
                                render={() => <Auth />}
                            />
                        </Switch>
                    </div>
                }
            />
        );
    }
}

export default Routes;
