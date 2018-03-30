import React from 'react';
import { Link } from 'react-router-dom';
// import { login, logout, isLoggedIn } from '../utils/AuthService';
// import '../App.css';

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
                    {/* <li>
                        {
                            (isLoggedIn()) ? <Link to="/special">Celebrity Jokes</Link> : ''
                        }

                    </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        {
                            (isLoggedIn()) ?
                                <button className="btn btn-danger log" onClick={() => logout()}>Log out </button>
                                : (<button className="btn btn-info log" onClick={() => login()}>Log In</button>)
                        }
                    </li> */}
                </ul>
            </nav>
        );
    }
}

export default Navigation;


