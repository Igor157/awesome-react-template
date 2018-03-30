export function authReducer(state = {}, action) {
    switch (action.type) {
        case 'SOME_ACTION':
            return {
                ...state, data: action.payload.data
            };
        default:
            return state;
    }
}
