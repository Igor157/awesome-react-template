import Auth0Lock from 'auth0-lock';
import history from '../../history';

const cid = 'ncQ6F8wwZIPMXhO4Ymi0ZbkGDyASS40E';
const domain = 'igor-kazakov.eu.auth0.com';
const options = {
    oidcConformant: true,
    allowShowPassword: true,
    usernameStyle: 'email',
    container: 'tmp-login'
};

export const lock = new Auth0Lock(cid, domain, options);

lock.on('authenticated', function (authResult) {
    if (!authResult.accessToken) { return; }
    let expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    lock.getUserInfo(authResult.accessToken, function (error, profile) {
        console.log(error, profile);
    });
});

lock.on('authorization_error', function (error) {
    console.log('authorization_error', error);
});

export function isAuthenticated() {
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() <= expiresAt;
}
export function logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    lock.logout({ returnTo: 'http://localhost:8080' });
}

export function login() {
    lock.show();
}
