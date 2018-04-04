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
let showAuth = false;
lock.on("show", () => {
    showAuth = !showAuth;
}
);


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
    constructor(props) {
        super(props);
        this.redirectToLogin = this.redirectToLogin.bind(this);
        this.stopRedirectToLogin = this.stopRedirectToLogin.bind(this);
        this.state = { redirectToLogin: false, isAuthenticated: isAuthenticated()};
    }
    redirectToLogin() {
        this.setState({
            redirectToLogin: true
        });
    }
    stopRedirectToLogin() {
        this.setState({
            redirectToLogin: false
        });
    }
    componentDidMount() {
        this.setState({
            isAuthenticated: isAuthenticated()
        });
    }
    render() {
        let startAuth = this.props.startAuth;
        console.log(this.state.isAuthenticated);
        return (
            <div className="tmp-page">
                <Switch>
                    <Route
                        path='/login'
                        render={(props) =>
                            <div className="tmp-page">
                                <Navigation stopRedirectToLogin={this.stopRedirectToLogin} />
                                <LoginPage login={login} logout={logout} isAuthenticated={isAuthenticated} {...props} />
                            </div>
                        }
                    />
                    <Route
                        path='/'
                        render={(props) =>
                            <div className="tmp-page">
                                <Switch>
                                    <Route
                                        path='/'
                                        render={(props) => <ConnectedHeader
                                            isAuthenticated={isAuthenticated}
                                            login={login}
                                            logout={logout}
                                            redirectToLogin={this.redirectToLogin}
                                            stopRedirectToLogin={this.stopRedirectToLogin}
                                            {...props}
                                        />}
                                    />
                                </Switch>
                                <Route
                                    exact path='/'
                                    render={() => this.state.redirectToLogin ? <Redirect to="/login" />
                                        :
                                        <Home />
                                    }
                                />
                                <Route
                                    path='/about'
                                    render={() => <About />}
                                />
                                <Route
                                    path='/profile'
                                    render={(props) => !this.state.redirectToLogin ?
                                        <Profile redirectToLogin={this.redirectToLogin} isAuthenticated={isAuthenticated} />
                                        : <Redirect to="/login" />
                                    }
                                />
                            </div>
                        }
                    />
                </Switch>
            </div>

        );
    }
}

export default Routes;

