import React from 'react';
import ReactDOM from 'react-dom';

export class LoginPage extends React.Component {
    componentDidMount() {
        this.props.login();
    }
    render() {
        return (
            <div>
            </div>
        );
    }
}

export default LoginPage;
