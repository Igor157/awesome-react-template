/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
// import './default.scss';
// import styles from './ik-currency-page.style.scss';
import {
    Route,
    NavLink,
    Switch
} from 'react-router-dom';
import Loadable from 'react-loadable';

function LoadingComponent(props) {
    if (props.error) {
        return <div>Error!</div>;
    } else if (props.timedOut) {
        return <div>Taking a long time...</div>;
    } else if (props.pastDelay) {
        return <div>Loading...</div>;
    } else {
        return null;
    }
}
const About = Loadable({
    loader: () => import('./components/About/About.jsx'),
    loading: LoadingComponent,
    delay: 200,
    timeout: 10000,
});
const Auth = Loadable({
    loader: () => import('./components/Auth/Auth.jsx'),
    loading: LoadingComponent,
    delay: 200,
    timeout: 10000,
});
const Home = Loadable({
    loader: () => import('./components/Home/Home.jsx'),
    loading: LoadingComponent,
    delay: 200,
    timeout: 10000,
});
const Navigation = Loadable({
    loader: () => import('./components/Navigation/Navigation.jsx'),
    loading: LoadingComponent,
    delay: 200,
    timeout: 10000,
});

class Routes extends React.Component {
    render() {
        return (
            <Route
                path='/'
                render={() =>
                    <div className="tmp-page">
                        <Switch>
                            <Route
                                path='/'
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
