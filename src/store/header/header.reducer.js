import GET_USER_INFO from '../constants/constants';

export function headerReducer(state = {}, action) {
    switch (action.type) {
        case GET_USER_INFO:
            return {
                ...state, userInfo: action.payload.userInfo
            };
        default:
            return state;
    }
}

