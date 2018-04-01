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
import Auth from './components/auth/authService.js';
import Callback from './components/Callback/Callback';

const auth = new Auth();
const handleAuthentication = ({ location }) => {
    if (/access_token|id_token|error/.test(location.hash)) {
        auth.handleAuthentication();
    }
};

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
    loader: () => import('./components/about/about.component.jsx'),
    loading: LoadingComponent,
    delay: 200,
    timeout: 10000
});
const Home = Loadable({
    loader: () => import('./components/home/home.component.jsx'),
    loading: LoadingComponent,
    delay: 200,
    timeout: 10000
});
const Header = Loadable({
    loader: () => import('./components/header/header.component.jsx'),
    loading: LoadingComponent,
    delay: 200,
    timeout: 10000
});

class Routes extends React.Component {
    render() {
        return (
            <div className="tmp-page">
                {/* <Route
                    exact path='/'
                    render={(props) => <AuthPage auth={auth} {...props} />}
                /> */}
                <Route path="/callback" render={(props) => {
                    handleAuthentication(props);
                    return <Callback {...props} />;
                }} />
                <Switch>
                    <Route
                        path='/about'
                        render={(props) => <Header auth={auth} {...props} />}
                    />
                    <Route
                        path='/home'
                        render={(props) => <Header auth={auth} {...props} />}
                    />
                </Switch>
                <Route
                    exact path='/about'
                    render={() => <About />}
                />
                <Route
                    path='/home'
                    render={() => <Home />}
                />

            </div>
        );
    }
}

export default Routes;
