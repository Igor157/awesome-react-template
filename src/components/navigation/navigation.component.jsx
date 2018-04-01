import React from 'react';
import { Link } from 'react-router-dom';


class Navigation extends React.Component {

    render() {
        return (
            <nav className="tmp-nav tmp-page__nav">
                <ul className="tmp-nav__links">
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;


