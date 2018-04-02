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
import LoginPage from './components/login-page/login-page.component.jsx';

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
const ConnectedHeader = Loadable({
    loader: () => import('./store/header/header.container.jsx'),
    loading: LoadingComponent,
    delay: 200,
    timeout: 10000
});
const Profile = Loadable({
    loader: () => import('./components/profile/profile.component.jsx'),
    loading: LoadingComponent,
    delay: 200,
    timeout: 10000
});

class Routes extends React.Component {
    render() {
        return (
            <div className="tmp-page">
                <Route
                    exact path='/'
                    render={(props) => <LoginPage login={auth.login()}/>}
                />
                <Route path="/callback" render={(props) => {
                    handleAuthentication(props);
                    return <Callback {...props} />;
                }} />
                <Switch>
                    <Route
                        path='/about'
                        render={(props) => <ConnectedHeader auth={auth} {...props} />}
                    />
                    <Route
                        path='/home'
                        render={(props) => <ConnectedHeader auth={auth} {...props} />}
                    />
                    <Route
                        path='/profile'
                        render={(props) => <ConnectedHeader auth={auth} {...props} />}
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
                <Route
                    path='/profile'
                    render={(props) => <Profile auth={auth} {...props} />}
                />

            </div>
        );
    }
}

export default Routes;
