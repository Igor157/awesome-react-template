import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Navigation from '../navigation/navigation.component.jsx';
import style from './header.style.css';

class Header extends Component {
    login() {
        this.props.redirectToLogin();
        this.props.startAuth(this.props.started);
    }
    logout() {
        this.props.logout();
    }
    render() {
        const isAuthenticated = this.props.isAuthenticated();
        return (
            <div className='tmp-header tmp-page__header'>
                <Navigation stopRedirectToLogin={this.props.stopRedirectToLogin} />
                {
                    isAuthenticated ?
                        <button className="tmp-header__log-out" onClick={() => this.logout()}>Log out </button>
                        : <button className="tmp-header__log-in" onClick={() => this.login()}>Log In</button>
                }
            </div >
        );
    }
}

export default Header;

