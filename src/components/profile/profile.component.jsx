import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from '../login-page/login-page.component.jsx';


export class Profile extends React.Component {
    componentWillMount() {
        if (!this.props.isAuthenticated()) {
            this.props.redirectToLogin();
        }
    }
    render() {
        let profile = JSON.parse(localStorage.getItem('profile'));
        return (
            <div className='tmp-profile tmp-page__profile' >
                <h1>Privat information</h1>
                {profile && profile.gender && profile.name &&
                    <p>Hi {profile.gender === 'male' ? 'dude' : 'sweety'}, we know that your name {profile.name}.
                     We know everything about you. Big brother watch!!!!!
                </p>}
            </div>
        );
    }
}

Profile.defaultProps = {
    userInfo: {}
};

export default Profile;
