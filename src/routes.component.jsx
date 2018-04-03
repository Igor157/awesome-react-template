import React from 'react';
import ReactDOM from 'react-dom';
// import './default.scss';
// import styles from './ik-currency-page.style.scss';
import {
    Route,
    NavLink,
    Switch,
    Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';
import Loadable from 'react-loadable';
import Auth from './components/auth/authService.js';
import Callback from './components/Callback/Callback';
import LoginPage from './components/login-page/login-page.component.jsx';
import lock from './components/auth/authService';
import './normalize.css';


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
        let startAuth = this.props.startAuth;
        console.log(startAuth);
        return (
            <div className="tmp-page">
                <Route
                    path='/'
                    render={(props) => <ConnectedHeader auth={lock} {...props} />}
                />
                <Route
                    exact path='/'
                    render={() =>
                        startAuth ? <Redirect to="/login" />
                            : <Home />
                    }

                />
                <Route
                    exact path='/about'
                    render={() => <About />}
                />
                <Route
                    path='/profile'
                    render={(props) => <Profile auth={lock} {...props} />}
                />
                {/* <Route path="/callback" render={(props) => {
                    return <Callback {...props} />;
                }} /> */}
                <Route
                    path='/login'
                    render={(props) => <LoginPage auth={lock} {...props} />}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        startAuth: state.headerReducer.startAuth
    };
};
const ConnectedRoutes = connect(
    mapStateToProps
)(Routes);

export default ConnectedRoutes;

