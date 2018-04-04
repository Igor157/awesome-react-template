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
// import Auth from './components/auth/authService.js';
import Callback from './components/Callback/Callback';
import LoginPage from './components/login-page/login-page.component.jsx';
import {
    lock,
    isAuthenticated,
    logout,
    login
} from './components/auth/authService';
import './normalize.css';
// let showAuth;
// lock.on("show", () => {
//     showAuth = true;
//     console.log('!!!!!!!!!!!!!!!!!!!!!!!!!');
// }
// );


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
const Navigation = Loadable({
    loader: () => import('./components/navigation/navigation.component.jsx'),
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
        return (
            <div className="tmp-page">
                <Switch>
                    {/* <Route
                        path='/login'
                        render={(props) => <Navigation
                            auth={lock}
                            isAuthenticated={isAuthenticated}
                            logout={logout}
                            {...props}
                        />}
                    /> */}
                    <Route
                        path='/'
                        render={(props) => <ConnectedHeader
                            auth={lock}
                            isAuthenticated={isAuthenticated}
                            login={login}
                            logout={logout}
                            {...props}
                        />}
                    />
                </Switch>
                <Route
                    exact path='/'
                    render={() =>
                        <Home />
                    }
                />
                {/* <Route
                    exact path='/'
                    render={() =>
                        showAuth ? <Redirect to="/login" />
                            : <Home />
                    }
                /> */}
                <Route
                    path='/about'
                    render={() => <About />}
                />
                <Route
                    path='/profile'
                    render={(props) => <Profile
                        auth={lock}
                        login={login}
                        isAuthenticated={isAuthenticated}
                        {...props}
                    />}
                />
                {/* <Route path="/callback" render={(props) => {
                    return <Callback {...props} />;
                }} /> */}
                <Route
                    path='/login'
                    render={(props) =>
                        <LoginPage auth={lock} {...props} />
                    }
                />
                {/* <div id='tmp-login'></div> */}
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

export default Routes;

