import { userConstants } from "../actions/constants"

const intiState = {
    users: [],
    conversations: []
}

export default (state = intiState, action) => {

    switch (action.type) {
        case `${userConstants.GET_REALTIME_USERS}_REQUEST`:
            break;
        case `${userConstants.GET_REALTIME_USERS}_SUCCESS`:
            state = {
                ...state,
                users: action.payload.users
            }
            break;
        case userConstants.GET_REALTIME_MESSAGES:
            state = {
                ...state,
                conversations: action.payload.conversations
            }
            break;
        case `${userConstants.GET_REALTIME_MESSAGES}_FAILURE`:
            state = {
                ...state,
                conversations: []
            }
            break;

            
        case `${userConstants.USER_CALL}_REQUEST`:
            state = {
                ...state,
                authenticating: true
            }
            break;
        case `${userConstants.USER_CALL}_SUCCESS`:
            state = {
                ...state,
                ...action.payload.user,
                authenticated: true,
                authenticating: false
            }
            break;
        case `${userConstants.USER_CALL}_FAILURE`:
            state = {
                ...state,
                authenticated: false,
                authenticating: false,
                error: action.payload.error
            }
            break;
    }


    return state;

}