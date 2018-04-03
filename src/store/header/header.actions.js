export function getUserInfo(userInfo) {
    return {
        type: 'GET_USER_INFO',
        payload: {
            userInfo
        }
    };
}
export function startAuth(started) {
    return {
        type: 'START_AUTH',
        payload: {
            startAuth: !started
        }
    };
}
