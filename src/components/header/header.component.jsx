import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Navigation from '../navigation/navigation.component.jsx';
import './header.style.css';

class AuthPage extends Component {
    goTo(route) {
        this.props.history.replace(`/${route}`);
    }

    login() {
        this.props.auth.login();
    }

    logout() {
        this.props.auth.logout();
    }

    render() {
        const { isAuthenticated } = this.props.auth;

        return (
            <div>
                <Navigation />
                <li>
                    {
                        isAuthenticated() ?
                            <button className="btn btn-danger log" onClick={() => this.logout()}>Log out </button>
                            : <button className="btn btn-info log" onClick={() => this.login()}>Log In</button>
                    }
                </li>
            </div >
        );
    }
}

export default AuthPage;

