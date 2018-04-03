// import auth0 from 'auth0-js';
// import history from '../../history';

// export default class Auth {
//     auth0 = new auth0.WebAuth({
//         domain: 'igor-kazakov.eu.auth0.com',
//         clientID: 'ncQ6F8wwZIPMXhO4Ymi0ZbkGDyASS40E',
//         redirectUri: 'http://localhost:8080/callback',
//         audience: 'https://igor-kazakov.eu.auth0.com/userinfo',
//         responseType: 'token id_token',
//         scope: 'openid profile read:contacts'
//     });
//     constructor() {
//         this.login = this.login.bind(this);
//         this.logout = this.logout.bind(this);
//         this.handleAuthentication = this.handleAuthentication.bind(this);
//         this.isAuthenticated = this.isAuthenticated.bind(this);
//         this.getProfile = this.getProfile.bind(this);
//     }
//     userProfile;
//     login() {
//         this.auth0.authorize();
//     }
//     handleAuthentication() {
//         this.auth0.parseHash((err, authResult) => {
//             if (authResult && authResult.accessToken && authResult.idToken) {
//                 this.setSession(authResult);
//                 history.replace('/home');
//             } else if (err) {
//                 history.replace('/home');
//                 console.log(err);
//             }
//         });
//     }

//     setSession(authResult) {
//         // Set the time that the Access Token will expire at
//         let expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());
//         localStorage.setItem('access_token', authResult.accessToken);
//         localStorage.setItem('id_token', authResult.idToken);
//         localStorage.setItem('expires_at', expiresAt);
//         // navigate to the home route
//         history.replace('/home');
//     }

//     logout() {
//         // Clear Access Token and ID Token from local storage
//         localStorage.removeItem('access_token');
//         localStorage.removeItem('id_token');
//         localStorage.removeItem('expires_at');
//         // navigate to the home route
//         history.replace('/home');
//     }

//     getAccessToken() {
//         const accessToken = localStorage.getItem('access_token');
//         if (!accessToken) {
//             throw new Error('No Access Token found');
//         }
//         return accessToken;
//     }
//     getProfile(cb) {
//         let accessToken = this.getAccessToken();
//         this.auth0.client.userInfo(accessToken, (err, profile) => {
//             if (profile) {
//                 this.userProfile = profile;
//             }
//             cb(err, profile);
//         });
//     }

//     isAuthenticated() {
//         // Check whether the current time is past the
//         // Access Token's expiry time
//         let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
//         return new Date().getTime() < expiresAt;
//     }
// }

import Auth0Lock from 'auth0-lock';
let options = {
    allowAutocomplete: true,
    // allowedConnections: ['Username-Password-Authentication', 'twitter', 'facebook', 'linkedin'],
    container: 'tmp-login',
    auth: {
        redirect: true,
        redirectUrl: 'http://localhost:8080/callback',
        responseType: 'code',
        params: {
            scope: 'openid profile'
        }
    }

};
let lock = new Auth0Lock(
    'ncQ6F8wwZIPMXhO4Ymi0ZbkGDyASS40E',
    'igor-kazakov.eu.auth0.com',
    options
);
import auth0 from 'auth0-js';
import history from '../../history';

// export default class Auth {
//     auth0 = new Auth0Lock(
//         'ncQ6F8wwZIPMXhO4Ymi0ZbkGDyASS40E',
//         'igor-kazakov.eu.auth0.com',
//         {
//             allowAutocomplete: true,
//             allowedConnections: ['Username-Password-Authentication', 'twitter', 'facebook', 'linkedin'],
//             container: 'tmp-login',
//             auth: {
//                 redirect: true,
//                 redirectUrl: 'http://localhost:8080/callback',
//                 responseType: 'code',
//                 params: {
//                     scope: 'openid profile'
//                 }
//             }
//         }
//     );
//     constructor() {
//         this.login = this.login.bind(this);
//         this.logout = this.logout.bind(this);
//         this.handleAuthentication = this.handleAuthentication.bind(this);
//         this.isAuthenticated = this.isAuthenticated.bind(this);
//         this.getProfile = this.getProfile.bind(this);
//     }
//     userProfile;
//     login() {
//         this.auth0.show();
//     }
//     handleAuthentication() {
//         this.auth0.parseHash((err, authResult) => {
//             if (authResult && authResult.accessToken && authResult.idToken) {
//                 this.setSession(authResult);
//                 history.replace('/home');
//             } else if (err) {
//                 history.replace('/home');
//                 console.log(err);
//             }
//         });
//     }

//     setSession(authResult) {
//         // Set the time that the Access Token will expire at
//         let expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());
//         localStorage.setItem('access_token', authResult.accessToken);
//         localStorage.setItem('id_token', authResult.idToken);
//         localStorage.setItem('expires_at', expiresAt);
//         // navigate to the home route
//         history.replace('/home');
//     }

//     logout() {
//         // Clear Access Token and ID Token from local storage
//         localStorage.removeItem('access_token');
//         localStorage.removeItem('id_token');
//         localStorage.removeItem('expires_at');
//         this.auth0.logout();
//         // navigate to the home route
//         history.replace('/home');
//     }

//     getAccessToken() {
//         const accessToken = localStorage.getItem('access_token');
//         if (!accessToken) {
//             throw new Error('No Access Token found');
//         }
//         return accessToken;
//     }
//     getProfile(cb) {
//         let accessToken = this.getAccessToken();
//         this.auth0.client.userInfo(accessToken, (err, profile) => {
//             if (profile) {
//                 this.userProfile = profile;
//             }
//             cb(err, profile);
//         });
//     }

//     isAuthenticated() {
//         // Check whether the current time is past the
//         // Access Token's expiry time
//         let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
//         return new Date().getTime() < expiresAt;
//     }
// }

export default lock;
