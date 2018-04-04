import React from 'react';
import { Link } from 'react-router-dom';
import style from './navigation.style.css';


class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.stopRedirectToLogin();
    }
    render() {
        return (
            <nav className="tmp-nav tmp-page__nav">
                <ul className="tmp-nav__links">
                    <li onClick={this.handleClick}>
                        <Link to="/">Home</Link>
                    </li>
                    <li onClick={this.handleClick}>
                        <Link to="/about">About</Link>
                    </li>
                    <li onClick={this.handleClick}>
                        <Link to="/profile">Profile</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;


