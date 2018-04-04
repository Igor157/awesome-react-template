import React from 'react';
import { Link } from 'react-router-dom';
import style from './navigation.style.css';


class Navigation extends React.Component {

    render() {
        return (
            <nav className="tmp-nav tmp-page__nav">
                <ul className="tmp-nav__links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;


