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
        return (
            <div className='tmp-profile tmp-page__profile' >
                <h1>Privat information</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque eget tellus faucibus, scelerisque lorem nec, interdum nunc.
                     In dignissim vehicula risus, quis porta lorem gravida vel.
                   Proin vehicula quam ex, sit amet ultricies magna sodales a.
                   Aenean varius tincidunt eros. Integer auctor neque sed elit mollis ultricies.
                   Mauris aliquam hendrerit dui a consequat.
                   Nam posuere elit nec porta mattis.
                   Nulla auctor mattis neque vitae vehicula.
                   Vivamus massa urna, luctus tempor libero ut, pulvinar imperdiet purus.
                   Ut cursus velit a dolor imperdiet tempor. Quisque turpis tortor, dictum in elit sed, bibendum venenatis lacus.
                </p>
            </div>
        );
    }
}

export default Profile;
