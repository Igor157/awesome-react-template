import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Navigation from '../navigation/navigation.component.jsx';
import style from './header.style.css';

class Header extends Component {
    login() {
        this.props.auth.show();
        this.props.startAuth(this.props.started);
    }
    logout() {
        this.props.auth.logout();
    }
    componentDidMount() {
        // const { userProfile, getProfile } = this.props.auth;
        // if (!userProfile) {
        //     getProfile((err, profile) => {
        //         this.props.getUserInfo(profile);
        //     });
        // } else {
        //     this.props.getUserInfo(userProfile);
        // }
    }
    render() {
        const { isAuthenticated } = this.props.auth;
        return (
            <div className='tmp-header tmp-page__header'>
                <Navigation />
                {/* {
                    isAuthenticated() ?
                        <button className="tmp-header__log-out" onClick={() => this.logout()}>Log out </button>
                        : <button className="tmp-header__log-in" onClick={() => this.login()}>Log In</button>
                } */}
                <button className="tmp-header__log-in" onClick={() => this.login()}>Log In</button>
            </div >
        );
    }
}

export default Header;

