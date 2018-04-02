export function getUserInfo(userInfo) {
    return {
        type: 'GET_USER_INFO',
        payload: {
            userInfo
        }
    };
}
