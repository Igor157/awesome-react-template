import GET_USER_INFO from '../constants/constants';

export function headerReducer(state = {}, action) {
    switch (action.type) {
        case 'GET_USER_INFO':
            return {
                ...state, userInfo: action.payload.userInfo
            };
        case 'START_AUTH':
            return {
                ...state, startAuth: action.payload.startAuth
            };
        default:
            return state;
    }
}

