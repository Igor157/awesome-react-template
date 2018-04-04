import React from 'react';
import ReactDOM from 'react-dom';

export class LoginPage extends React.Component {
    componentDidMount() {
        this.props.login();
    }
    componentWillUnmount() {
        if (!this.props.isAuthenticated()) {
            this.props.logout();
        }
    }
    render() {
        return (
            <div id='tmp-login'></div>
        );
    }
}

export default LoginPage;
